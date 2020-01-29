# basic config options
config {
    language = ru
    locale = ru_RU.UTF-8
    locale_all = ru_RU
    sys_language_uid = 0

    navigation {
    # cat=EXT:tmpl: basic/120/10; type=string; label= Page-Id der Homeseite
        startPageUid = 1

    # Foter social links
        facebookLink = fb.com
        vkLink = vk.com
        youtubeLink = youtube.com
    }
    header {
        logoTitle = Fuchs oil worldwide
    }
    layout {

    }
    footer {
        copyright = &copy; Fuchs oil worldwide. 2018
        developerText = Кропотливо создано компанией - "Простые технологии"
        developerLink =
    }

}

# some options for the page object, meta data, etc.
    page {
    meta {
    # cat=EXT:tmpl: basic/120/100; type=string; label=Description: Enter a short description of the page. It will be displayed in the result lists of most search engines.
            description =
    # cat=EXT:tmpl: basic/120/110; type=string; label=Author: Enter the page author's name.
        author =
    # cat=EXT:tmpl: basic/120/120; type=string; label=Keywords: Enter keywords for the page separated by commas. You may also use short phrases.
            keywords =
    # cat=EXT:tmpl: advanced/120/100; type=string; label=viewport
        viewport = width=device-width, initial-scale=1
    # cat=EXT:tmpl: advanced/120/110; type=string; label=robots
        robots = index, follow
    # cat=EXT:tmpl: advanced/120/120; type=string; label=apple-mobile-web-app-capable
        apple-mobile-web-app-capable = no
    # cat=EXT:tmpl: advanced/120/130; type=string; label=compatible
        compatible = IE=edge
    # cat=EXT:tmpl: advanced/120/140; type=string; label=google
        google = notranslate

    }
}

styles {
    content {
        textmedia.linkWrap.lightboxEnabled = 1
        textmedia.maxW = 1280
    }
}

styles.content.textmedia.linkWrap.lightboxCssClass = magnificpopup
plugin.tx_jhmagnificpopup.magnificpopup.support.tx_news = 1
plugin.tx_jhmagnificpopup.type.ajax.ajax.cursor = 0