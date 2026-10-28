import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { projects } from '../data';

const PER_ROW = 3;
const MAX_TAGS = 3;
const ease = [0.22, 1, 0.36, 1];

const Arrow = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
  </svg>
);

function rows(list) {
  const out = [];
  for (let i = 0; i < list.length; i += PER_ROW) out.push(list.slice(i, i + PER_ROW));
  return out;
}

function ProjCard({ project, open, onOpen, index }) {
  const reduce = useReducedMotion();
  const mainLink = project.demo || project.github;
  const extraTags = project.tech.length - MAX_TAGS;
  const t = (delay) => (reduce ? { duration: 0 } : { duration: 0.45, delay, ease });

  return (
    <motion.article
      className={`pcard${open ? ' pcard--open' : ''}`}
      onMouseEnter={onOpen} onFocus={onOpen} onClick={onOpen}
      tabIndex={open ? -1 : 0}
      aria-expanded={open}
      aria-label={open ? undefined : `${project.title}, show details`}
      initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, delay: index * 0.09, ease }}
    >

      <div className="pcard-body">
        <div className="pcard-text">
          <span className="pcard-label">{project.label}</span>
          <h3 className="pcard-title">{project.title}</h3>

          <AnimatePresence initial={false}>
            {open && (
              <motion.div className="pcard-details" key="details"
                initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }} transition={t(0)}>
                {project.impact && (
                  <motion.p className="pcard-impact" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={t(0.15)}>
                    {project.impact}
                  </motion.p>
                )}
                <motion.p className="pcard-desc" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={t(0.22)}>
                  {project.desc}
                </motion.p>
                <motion.div className="pcard-tags" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={t(0.29)}>
                  {project.tech.slice(0, MAX_TAGS).map(tag => <span key={tag} className="pcard-tag">{tag}</span>)}
                  {extraTags > 0 && <span className="pcard-tag pcard-tag--more" title={project.tech.slice(MAX_TAGS).join(', ')}>+{extraTags}</span>}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      <div className="pcard-foot">
        {open ? (
          <motion.div className="pcard-links" key="links" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={t(0.3)}>
            {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer">Live <Arrow /></a>}
            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">Code <Arrow /></a>}
          </motion.div>
        ) : (
          <span className="pcard-more">Read more</span>
        )}
        {open && mainLink ? (
          <a className="pcard-go" href={mainLink} target="_blank" rel="noopener noreferrer"
            aria-label={`Open ${project.title}`} onClick={e => e.stopPropagation()}>
            <Arrow />
          </a>
        ) : (
          <span className="pcard-go" aria-hidden="true"><Arrow /></span>
        )}
      </div>
    </motion.article>
  );
}

function ProjRow({ items }) {
  const [openIdx, setOpenIdx] = useState(0);
  return (
    <div className="proj-row">
      {items.map((p, i) => (
        <ProjCard key={p.title} project={p} index={i} open={openIdx === i} onOpen={() => setOpenIdx(i)} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <main>
      <section className="section-wrap" style={{ background: 'var(--bg)', minHeight: '100vh' }}>
        <div className="section-inner">
          <div className="proj-head">
            <div>
              <span className="lbl lbl-light">My Work</span>
              <h2 className="s-heading s-heading-light">
                Things I've built
              </h2>
            </div>
            <a className="proj-all" href="https://github.com/nainasachdev10" target="_blank" rel="noopener noreferrer">
              All on GitHub <span className="proj-all-icon"><Arrow /></span>
            </a>
          </div>

          <div className="proj-rows">
            {rows(projects).map((items, r) => <ProjRow key={r} items={items} />)}
          </div>
        </div>
      </section>
    </main>
  );
}
