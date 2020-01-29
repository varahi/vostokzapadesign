# Add headers
TCEFORM.tt_content.header_layout {
    altLabels {
        1 = h1
        2 = h2
        3 = h3
        4 = h4
        5 = h5
    }
    addItems {
        10 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:header.h2_line
        15 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:header.h2_line_text_page
    }
}

# News template
tx_news.templateLayouts {
    1 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.top_news
    2 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.standard_news
    3 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.top_news_main_page
    4 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.standard_news_main_page
    10 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.listnews
    //2 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:news.layout.listnews_title
}

TCEFORM.tt_content {
    layout {
        altLabels{
        //0 = Normale Box
        //1 = Blaue Box
        //2 = Graue Box
        }
    #removeItems = 3,4,5,6,7,8,9,10
    #removeItems = 0,1,2,3
        removeItems = 1,2,3
        addItems {
            //5 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.layout_textpage_text
            //20 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.layout_responsive_image
            //30 = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.layout_simple_image
        }
    }
}