################
# Breadcrump
################

lib.breadcrumb = COA
lib.breadcrumb {
    stdWrap.wrap = |
    10 = HMENU
    10.includeNotInMenu = 0
    10 {
        special = rootline
        special.range =  0 | -1
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                wrapItemAndSub =
                ATagTitle.field = subtitle // title
                stdWrap.htmlSpecialChars = 1
                stdWrap.field = subtitle // title

                linkWrap = |&nbsp;-&nbsp;
                ATagBeforeWrap = 1
            }

            CUR <.NO
            CUR {
                wrapItemAndSub = <span class="breadcrumbs__current">|</span>
                doNotLinkIt = 1
                linkWrap = |
            }
        }
    }
}


[globalVar = GP:tx_news_pi1|news > 0]
#[globalVar = TSFE:id = 15]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
    stdWrap.wrap = |
    10 = HMENU
    10.includeNotInMenu = 0
    10 {
        special = rootline
        special.range =  0 | -1
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                wrapItemAndSub = |
                ATagTitle.field = subtitle // title
                stdWrap.htmlSpecialChars = 1
                stdWrap.field = subtitle // title

                linkWrap = |&nbsp;-&nbsp;
                ATagBeforeWrap = 1
            }

            CUR <.NO
            CUR {
                wrapItemAndSub = |
                doNotLinkIt = 1
                linkWrap = |
            }
        }
    }

# Add news title if on single view
    20 = RECORDS
    20 {
        if.isTrue.data = GP:tx_news_pi1|news
        dontCheckPid = 1
        tables = tx_news_domain_model_news
        source.data = GP:tx_news_pi1|news
        source.intval = 1
        conf.tx_news_domain_model_news = TEXT
        conf.tx_news_domain_model_news {
            field = subtitle // title
            htmlSpecialChars = 1
        }
        stdWrap.wrap = <span class="breadcrumbs__current">|</span>
        stdWrap.required = 1
    }
}


[globalVar = GP:tx_fuchscatalog_fuchscatalog|item > 0]
lib.breadcrumb >
lib.breadcrumb = COA
lib.breadcrumb {
    stdWrap.wrap = |
    10 = HMENU
    10.includeNotInMenu = 0
    10 {
        special = rootline
        special.range =  0 | -1
        1 = TMENU
        1 {
            noBlur = 1
            NO = 1
            NO {
                wrapItemAndSub = |
                ATagTitle.field = subtitle // title
                stdWrap.htmlSpecialChars = 1
                stdWrap.field = subtitle // title

                linkWrap = |&nbsp;-&nbsp;
                ATagBeforeWrap = 1
            }

            CUR <.NO
            CUR {
                wrapItemAndSub = |
                doNotLinkIt = 1
                linkWrap = |
            }
        }
    }

    20 = RECORDS
    20 {
        if.isTrue.data = GP:tx_fuchscatalog_fuchscatalog|item
        dontCheckPid = 1
        tables = tx_fuchscatalog_domain_model_item
        source.data = GP:tx_fuchscatalog_fuchscatalog|item
        source.intval = 1
        conf.tx_fuchscatalog_domain_model_item = TEXT
        conf.tx_fuchscatalog_domain_model_item {
            field = title
            htmlSpecialChars = 1
        }
        stdWrap.wrap = <span class="breadcrumbs__current">|</span>
        stdWrap.required = 1
    }
}

[global]