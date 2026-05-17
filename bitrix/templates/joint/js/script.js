/**
 * Joint Complex — main script
 * Vanilla JS: mobile menu, smooth scroll, FAQ accordion,
 * sticky header, scroll-top button, form validation, scroll animations.
 *
 * Claude (AI) was used to generate the initial structure and
 * optimise event delegation patterns for FAQ and scroll handling.
 */

(function () {
    'use strict';

    /* ----------------------------------------------------------------
       Mobile menu
    ---------------------------------------------------------------- */
    const burger  = document.getElementById('burger');
    const mainNav = document.getElementById('main-nav');

    if (burger && mainNav) {
        burger.addEventListener('click', function () {
            const isOpen = mainNav.classList.toggle('is-open');
            burger.classList.toggle('is-open', isOpen);
            burger.setAttribute('aria-expanded', String(isOpen));
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });

        /* Close menu when a nav link is clicked */
        mainNav.addEventListener('click', function (e) {
            if (e.target.classList.contains('nav__link')) {
                mainNav.classList.remove('is-open');
                burger.classList.remove('is-open');
                burger.setAttribute('aria-expanded', 'false');
                document.body.style.overflow = '';
            }
        });
    }

    /* ----------------------------------------------------------------
       Sticky header — add shadow on scroll
    ---------------------------------------------------------------- */
    const header = document.getElementById('site-header');

    if (header) {
        const onScroll = function () {
            header.classList.toggle('scrolled', window.scrollY > 10);
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    /* ----------------------------------------------------------------
       Scroll-to-top button
    ---------------------------------------------------------------- */
    const scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            scrollTopBtn.classList.toggle('is-visible', window.scrollY > 400);
        }, { passive: true });

        scrollTopBtn.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ----------------------------------------------------------------
       FAQ accordion
    ---------------------------------------------------------------- */
    document.querySelectorAll('.faq-item').forEach(function (item) {
        const btn = item.querySelector('.faq-question');
        if (!btn) return;

        btn.addEventListener('click', function () {
            const isOpen = item.classList.contains('open');

            /* Close all */
            document.querySelectorAll('.faq-item.open').forEach(function (el) {
                el.classList.remove('open');
                const q = el.querySelector('.faq-question');
                if (q) q.setAttribute('aria-expanded', 'false');
            });

            /* Open clicked if it was closed */
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* ----------------------------------------------------------------
       Smooth anchor scroll (for older browsers without CSS support)
    ---------------------------------------------------------------- */
    document.addEventListener('click', function (e) {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    /* ----------------------------------------------------------------
       Scroll-reveal animations
    ---------------------------------------------------------------- */
    if ('IntersectionObserver' in window) {
        const animatedEls = document.querySelectorAll(
            '.flow-card, .audience-card, .ingredient-item'
        );

        const revealObserver = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animatedEls.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        /* Fallback: show all elements immediately */
        document.querySelectorAll('.flow-card, .audience-card, .ingredient-item')
            .forEach(function (el) { el.classList.add('is-visible'); });
    }

    /* ----------------------------------------------------------------
       Contact form validation and submission
    ---------------------------------------------------------------- */
    const form        = document.getElementById('contact-form');
    const formSuccess = document.getElementById('form-success');

    if (form) {
        const rules = {
            'form-name':  { required: true, minLength: 2 },
            'form-phone': { required: true, pattern: /^[\d\s\+\-\(\)]{10,}$/ },
            'form-email': { required: false, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
            'form-consent': { required: true, type: 'checkbox' }
        };

        function validateField(field) {
            const rule = rules[field.id];
            if (!rule) return true;

            let valid = true;

            if (rule.type === 'checkbox') {
                valid = field.checked;
            } else {
                const val = field.value.trim();
                if (rule.required && !val) valid = false;
                if (valid && rule.minLength && val.length < rule.minLength) valid = false;
                if (valid && rule.pattern && val && !rule.pattern.test(val)) valid = false;
            }

            field.classList.toggle('is-error', !valid);
            return valid;
        }

        /* Inline validation on blur */
        form.querySelectorAll('.form__input, input[type="checkbox"]')
            .forEach(function (field) {
                field.addEventListener('blur', function () { validateField(field); });
                field.addEventListener('input', function () {
                    if (field.classList.contains('is-error')) validateField(field);
                });
            });

        form.addEventListener('submit', function (e) {
            e.preventDefault();

            let allValid = true;

            Object.keys(rules).forEach(function (id) {
                const field = form.querySelector('#' + id);
                if (field && !validateField(field)) allValid = false;
            });

            if (!allValid) return;

            /*
             * Bitrix form submission via BX.ajax or CFormAjax.
             * Replace the section below with your component call when
             * integrating the form as a Bitrix webform component.
             */
            const submitBtn = form.querySelector('[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';

            /* Simulate async submit — replace with real fetch/BX.ajax */
            setTimeout(function () {
                form.style.display = 'none';
                if (formSuccess) formSuccess.classList.add('is-shown');
            }, 800);
        });
    }

    /* ----------------------------------------------------------------
       Phone mask — simple formatting for RU numbers
    ---------------------------------------------------------------- */
    const phoneInput = document.getElementById('form-phone');

    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            let digits = this.value.replace(/\D/g, '');
            if (digits.startsWith('8')) digits = '7' + digits.slice(1);
            if (digits.startsWith('7') && digits.length > 1) {
                let formatted = '+7';
                if (digits.length > 1) formatted += ' (' + digits.slice(1, 4);
                if (digits.length >= 4) formatted += ') ' + digits.slice(4, 7);
                if (digits.length >= 7) formatted += '-' + digits.slice(7, 9);
                if (digits.length >= 9) formatted += '-' + digits.slice(9, 11);
                this.value = formatted;
            }
        });
    }

})();
