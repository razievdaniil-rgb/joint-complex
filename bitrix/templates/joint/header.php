<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
?><!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Complex SW СУСТАВЫ — инновационная биологически активная добавка для суставов и связок. Глюкозамин, хондроитин, МСМ, коллаген.">
    <meta name="keywords" content="суставы, глюкозамин, хондроитин, МСМ, коллаген, БАД, FMF">
    <meta property="og:title"       content="Complex SW СУСТАВЫ — FMF">
    <meta property="og:description" content="Биологически активная добавка нового поколения. 8 активных компонентов. Производство GMP.">
    <meta property="og:type"        content="website">
    <?php $APPLICATION->ShowHead(); ?>
    <link rel="stylesheet" href="/bitrix/templates/joint/css/style.css">
</head>
<body>
    <?php $APPLICATION->ShowPanel(); ?>

    <header class="site-header" id="site-header">
        <div class="container">
            <div class="header__inner">

                <a href="/" class="logo" aria-label="FMF — на главную">
                    <img src="/bitrix/templates/joint/images/logo.svg" alt="FMF" class="logo__icon">
                    <span class="logo__text">FMF</span>
                </a>

                <nav class="header__nav" id="main-nav" aria-label="Основная навигация">
                    <ul class="nav__list">
                        <li><a href="#about"        class="nav__link">Продукт</a></li>
                        <li><a href="#composition"  class="nav__link">Состав</a></li>
                        <li><a href="#for-whom"     class="nav__link">Для кого</a></li>
                        <li><a href="#price"        class="nav__link">Цена</a></li>
                        <li><a href="#faq"          class="nav__link">Вопросы</a></li>
                    </ul>
                </nav>

                <div class="header__right">
                    <a href="tel:+78001234567" class="header__phone">8 800 123-45-67</a>
                    <a href="#price" class="btn--header">
                        Оставить заявку
                        <span class="btn--header__arrow" aria-hidden="true">
                            <svg viewBox="0 0 14 14" fill="none">
                                <path d="M2 7h10M7.5 2.5l4.5 4.5-4.5 4.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </a>
                    <button class="burger" id="burger" aria-label="Меню" aria-expanded="false">
                        <span></span><span></span><span></span>
                    </button>
                </div>

            </div>
        </div>
    </header>
