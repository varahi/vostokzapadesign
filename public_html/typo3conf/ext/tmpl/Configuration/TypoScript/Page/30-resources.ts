page {
# include js header
    includeJSLibs {
        //00_jquery = https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js
        //00_jquery = EXT:tmpl/Resources/Public/JavaScript/jquery-2.2.4.min.js
        //00_jquery.external = 1
        //00_jquery.forceOnTop = 1
    }
# include is in footer
    includeJS {
        //10_js = EXT:tmpl/Resources/Public/JavaScript/functions.min.js
        //20_js = EXT:tmpl/Resources/Public/JavaScript/custom.js
        00_jquery = EXT:tmpl/Resources/Public/libs/jquery-3.2.1.min.js
        10_onepage = EXT:tmpl/Resources/Public/libs/jquery.onepage-scroll.js
        20_autocomplete = EXT:tmpl/Resources/Public/libs/jquery.autocomplete.min.js
        30_fancybox = EXT:tmpl/Resources/Public/libs/jquery.fancybox.min.js
        40_maps_yandex = https://api-maps.yandex.ru/2.1/?lang=ru_RU
        50_scrollbar = EXT:tmpl/Resources/Public/libs/jquery.mCustomScrollbar.concat.min.js
        60_scrollbar = EXT:tmpl/Resources/Public/js/main.js
    }

# include css
    includeCSS {
        10_style = EXT:tmpl/Resources/Public/css/reset.css
        20_style = EXT:tmpl/Resources/Public/css/onepage-scroll.css
        30_style = EXT:tmpl/Resources/Public/css/jquery.fancybox.min.css
        40_style = EXT:tmpl/Resources/Public/libs/jquery.mCustomScrollbar.css
        50_style = EXT:tmpl/Resources/Public/css/main.css
        100_style = EXT:tmpl/Resources/Public/css/custom.css
    }

#footerData {
    #	10 = TEXT
    #	10.value = <script src="/typo3conf/ext/tmpl/Resources/Public/JavaScript/functions.min.js" type="text/javascript"></script>
    #}

    #shortcutIcon = EXT:tmpl/Resources/Public/Favicons/favicon.ico
}

# Favicons
//page.headerData.2039 = FLUIDTEMPLATE
//page.headerData.2039 {
//    file = EXT:tmpl/Resources/Private/Partials/Favicons.html
//    extbase.controllerExtensionName = tmpl
//}