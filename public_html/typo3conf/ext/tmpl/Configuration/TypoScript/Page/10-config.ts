config {
    doctype = html5

# basic language setup
    language = {$config.language}
    locale_all = {$config.locale}
    sys_language_uid = {$config.sys_language_uid}
    htmlTag_setParams = lang="{$config.language}" dir="ltr"
    htmlTag_setParams.insertData = 1

    linkVars = L
    sys_language_mode = content_fallback
    sys_language_overlay = 1

# page title / meta title
    pageTitleFirst = 1
    pageTitleSeparator = –
  pageTitleSeparator.noTrimWrap = | | |

# URL setup
    tx_realurl_enable = 1
    absRefPrefix = auto

# some css and js cleanups
    removeDefaultJS = external
    inlineStyle2TempFile = 1
    moveJsFromHeaderToFooter = 0
    setJS_openPic = 0

# for browsers and proxies
    sendCacheHeaders = 1

#typolinkCheckRootline = 1
#typolinkEnableLinksAcrossDomains = 1

    //concatenateJs = 1
    //concatenateCss = 1
    //compressJs = 1
    //compressCss = 1
}

config.contentObjectExceptionHandler = 0