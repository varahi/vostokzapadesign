# setup: no need to include static file anymore:
<INCLUDE_TYPOSCRIPT: source=FILE:EXT:gridelements/static/gridelements/setup.txt>

#tt_content.gridelements_pi1.10 =< lib.stdheader
tt_content.gridelements_pi1.20.10.setup {
    Text_Images < lib.gridelements.defaultGridSetup
    Text_Images {
        cObject = FLUIDTEMPLATE
        cObject {
            partialRootPath = EXT:tmpl/Gridelements/Text_Images/Resources/Private/Partials/
            file = EXT:tmpl/Gridelements/Text_Images/Resources/Private/Templates/Template.html
        }
    }
}