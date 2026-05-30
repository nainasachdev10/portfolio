import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { sounds } from '../utils/sounds';

const HomeIcon       = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const UserIcon       = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const FolderIcon     = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>;
const BriefcaseIcon  = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const LayersIcon     = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const MailIcon       = () => <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>;

const navItems = [
  { path: '/',           label: 'Home',       Icon: HomeIcon },
  { path: '/about',      label: 'About',      Icon: UserIcon },
  { path: '/projects',   label: 'Projects',   Icon: FolderIcon },
  { path: '/experience', label: 'Experience', Icon: BriefcaseIcon },
  { path: '/skills',     label: 'Skills',     Icon: LayersIcon },
  { path: '/contact',    label: 'Contact',    Icon: MailIcon },
];

export default function FloatingNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const [transitingPath, setTransitingPath] = useState(null);

  const handleNav = (targetPath) => {
    sounds.navClick();

    const fromIdx = navItems.findIndex(n => n.path === location.pathname);
    const toIdx   = navItems.findIndex(n => n.path === targetPath);

    navigate(targetPath);

    if (fromIdx === -1 || fromIdx === toIdx) return;

    const dir   = toIdx > fromIdx ? 1 : -1;
    const steps = [];
    for (let i = fromIdx + dir; i !== toIdx + dir; i += dir) steps.push(i);

    // Light up each intermediate icon in sequence
    steps.forEach((idx, step) => {
      setTimeout(() => setTransitingPath(navItems[idx].path), step * 110);
    });
    setTimeout(() => setTransitingPath(null), steps.length * 110 + 120);
  };

  return (
    <nav className="floating-nav" aria-label="Page navigation">
      {navItems.map(({ path, label, Icon }) => {
        const isActive    = location.pathname === path;
        const isTransiting = transitingPath === path;
        return (
          <button
            key={path}
            className={`floating-nav-btn${isActive ? ' active' : ''}${isTransiting ? ' transiting' : ''}`}
            onClick={() => handleNav(path)}
            aria-label={label}
          >
            <span className="fnav-icon"><Icon /></span>
            <span className="fnav-label">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
