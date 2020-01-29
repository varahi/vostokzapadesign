tt_content.gridelements_pi1.20.10.setup {
    Standard_Container < lib.gridelements.defaultGridSetup
    Standard_Container {
        cObject = FLUIDTEMPLATE
        cObject {
            file = EXT:tmpl/Gridelements/Standard_Container/Resources/Private/Templates/Template.html
        }
    }
}