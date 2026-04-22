"use client";

import { spotsFillWidthPct } from "@/content/site";
import { useEffect } from "react";

const EASE_PREMIUM = "cubic-bezier(0.22, 1, 0.36, 1)";

function cubicEaseOut(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useCreogumSite() {
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".cg-nav");
    const sticky = document.querySelector<HTMLElement>(".cg-sticky-cta");
    const hero = document.querySelector<HTMLElement>(".cg-hero");
    const formSection = document.querySelector<HTMLElement>("#order");
    const orb1 = document.querySelector<HTMLElement>(".cg-orb-wrap-1");
    const orb2 = document.querySelector<HTMLElement>(".cg-orb-wrap-2");

    const revealEls = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-left, .reveal-right, .reveal-scale",
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        }
      },
      { threshold: 0.15 },
    );

    revealEls.forEach((el) => io.observe(el));

    const onScrollNav = () => {
      if (!nav) return;
      if (window.scrollY > 40) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };

    const onScrollSticky = () => {
      if (!sticky || !hero || !formSection) return;
      const heroH = hero.offsetHeight;
      const formTop = formSection.getBoundingClientRect().top + window.scrollY;
      const y = window.scrollY;
      const show = y > heroH * 0.6 && y < formTop - 100;
      sticky.classList.toggle("visible", show);
    };

    const onScrollParallax = () => {
      if (!orb1 || !orb2) return;
      const y = window.scrollY;
      orb1.style.transform = `translateY(${y * 0.15}px)`;
      orb2.style.transform = `translateY(${y * -0.1}px)`;
    };

    onScrollNav();
    onScrollSticky();
    onScrollParallax();

    window.addEventListener("scroll", onScrollNav, { passive: true });
    window.addEventListener("scroll", onScrollSticky, { passive: true });
    window.addEventListener("scroll", onScrollParallax, { passive: true });

    /* Survey bars + counter */
    const surveySection = document.querySelector<HTMLElement>("#survey");
    let surveyDone = false;

    const runSurveyAnim = () => {
      if (surveyDone || !surveySection) return;
      surveyDone = true;

      const bars = surveySection.querySelectorAll<HTMLElement>("[data-survey-bar]");
      bars.forEach((bar, i) => {
        const target = bar.getAttribute("data-width") ?? "0%";
        window.setTimeout(() => {
          bar.style.width = target;
          bar.style.transition = `width 1.4s ${EASE_PREMIUM}`;
        }, i * 150);
      });

      const counter = surveySection.querySelector<HTMLElement>("[data-counter]");
      if (!counter) return;
      const end = parseFloat(counter.getAttribute("data-counter-end") ?? "75.2");
      if (Number.isNaN(end)) return;
      const duration = 1600;
      const start = performance.now();

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / duration);
        const v = cubicEaseOut(t) * end;
        counter.textContent = `${v.toFixed(1)}%`;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const surveyIo =
      surveySection &&
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) runSurveyAnim();
          }
        },
        { threshold: 0.2 },
      );
    if (surveySection && surveyIo) surveyIo.observe(surveySection);

    /* Spot bar */
    const spotSection = document.querySelector<HTMLElement>("#spots");
    const spotFill = document.querySelector<HTMLElement>("[data-spot-fill]");
    let spotDone = false;

    const spotIo =
      spotSection &&
      spotFill &&
      new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting && !spotDone) {
              spotDone = true;
              spotFill.style.width = `${spotsFillWidthPct}%`;
            }
          }
        },
        { threshold: 0.25 },
      );
    if (spotSection && spotIo) spotIo.observe(spotSection);

    return () => {
      io.disconnect();
      surveyIo?.disconnect();
      spotIo?.disconnect();
      window.removeEventListener("scroll", onScrollNav);
      window.removeEventListener("scroll", onScrollSticky);
      window.removeEventListener("scroll", onScrollParallax);
    };
  }, []);
}
