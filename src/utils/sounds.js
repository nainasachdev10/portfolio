let _ctx = null;

function ctx() {
  if (!_ctx) {
    try { _ctx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch { return null; }
  }
  if (_ctx.state === 'suspended') _ctx.resume();
  return _ctx;
}

function chime(freqs) {
  const c = ctx();
  if (!c) return;
  freqs.forEach((freq, i) => {
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = 'triangle';
    osc.frequency.value = freq;
    const t = c.currentTime + i * 0.075;
    gain.gain.setValueAtTime(0.001, t);
    gain.gain.linearRampToValueAtTime(0.09, t + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);
    osc.start(t);
    osc.stop(t + 0.42);
  });
}

export const sounds = {
  // Clean tick — short sine burst like a clock tick
  navClick: () => {
    const c = ctx();
    if (!c) return;
    const osc = c.createOscillator();
    const gain = c.createGain();
    osc.connect(gain);
    gain.connect(c.destination);
    osc.type = 'sine';
    osc.frequency.value = 1300;
    gain.gain.setValueAtTime(0.06, c.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.022);
    osc.start(c.currentTime);
    osc.stop(c.currentTime + 0.025);
  },

  // Ascending triad C5–E5–G5 → going dark
  themeOn:  () => chime([523.25, 659.25, 783.99]),

  // Descending triad G5–E5–C5 → going light
  themeOff: () => chime([783.99, 659.25, 523.25]),
};
