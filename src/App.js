import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import SplitTextJS from 'split-text-js';

export default function App() {
  useLayoutEffect(() => {
    const titles = gsap.utils.toArray('.intro-text p');
    const tl = gsap.timeline({ repeat: 5 });

    titles.forEach((title) => {
      const splitTitle = new SplitTextJS(title);

      tl.from(
        splitTitle.chars,
        { opacity: 0, y: 50, rotateX: -90, stagger: 0.02 },
        '<'
      ).to(
        splitTitle.chars,
        { opacity: 0, y: -60, rotateX: 90, stagger: 0.02 },
        '<1'
      );
    });
  });

  return (
    <main class="container">
      <h1> I'm Dhivakar</h1>
      <div class="intro-text">
        <p>Developer</p>
        <p>Instructor</p>
        <p>Blogger</p>
      </div>
    </main>
  );
}
