page.meta {
    revisit             = 1
    revisit-after       = 7 days
    imagetoolbar        = no
#keywords.field      = keywords
#keywords.ifEmpty    = {$page.meta.keywords}

#description.field   = description
#description.ifEmpty = {$page.meta.description}

#abstract.field      = abstract
#abstract.ifEmpty    = {$page.meta.abstract}
#page-topic.field    = title
#page-topic.ifEmpty  = {$page.meta.topic}
#author              = {$page.meta.autor}

    cache-control = max-age=0
    cache-control = no-cache
    expires = 0
    pragma = no-cache

    local_all           = {$config.locale_all}
    language            = {$config.language}
    robots              = index,follow
    //robots               = noindex,nofollow
    viewport = width=device-width
#viewport             = width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes
#MSSmartTagsPreventParsing = true
#SKYPE_TOOLBAR = SKYPE_TOOLBAR_PARSER_COMPATIBLE

}