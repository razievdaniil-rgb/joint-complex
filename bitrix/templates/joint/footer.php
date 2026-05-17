<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?>

<!-- ================================================================
     FOOTER
================================================================ -->
<div class="footer-wrap">
    <footer class="site-footer">

        <div class="footer__top">
            <div>
                <a href="/" class="footer__logo-text" aria-label="FMF">FMF</a>
                <p class="footer__disclaimer">
                    БАД. Не является лекарственным средством.<br>
                    Требуется консультация специалиста.
                </p>
                <div class="footer__socials" style="margin-top:16px;">
                    <a href="#" class="footer__social" aria-label="ВКонтакте">VK</a>
                    <a href="#" class="footer__social" aria-label="Telegram">TG</a>
                    <a href="#" class="footer__social" aria-label="YouTube">YT</a>
                </div>
            </div>

            <nav class="footer__nav" aria-label="Навигация по сайту">
                <a href="#about"       class="footer__nav-link">Продукт</a>
                <a href="#composition" class="footer__nav-link">Состав</a>
                <a href="#for-whom"    class="footer__nav-link">Для кого</a>
                <a href="#price"       class="footer__nav-link">Цена</a>
                <a href="#faq"         class="footer__nav-link">Вопросы</a>
            </nav>
        </div>

        <div class="footer__bottom">
            <a href="tel:+78001234567" class="footer__phone">8 800 123-45-67</a>
            <p class="footer__copy">© 2026 FMF. Все права защищены.</p>
        </div>

    </footer>
</div>

<!-- Scroll to top -->
<button class="scroll-top" id="scroll-top" aria-label="Наверх">
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16V4M5 9l5-5 5 5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
</button>

<script src="/bitrix/templates/joint/js/script.js"></script>
<?php require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/footer.php'); ?>
</body>
</html>
