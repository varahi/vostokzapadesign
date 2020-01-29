# **************************************************
# Add the teaser to the "New Content Element Wizard"
# **************************************************
mod.wizards.newContentElement.wizardItems.common {
    elements {
        ce_top_container {
            iconIdentifier = content-image
            title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_title
            description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.top_container_description
            tt_content_defValues {
                CType = ce_top_container
            }
        }
    }
    show := addToList(ce_top_container)
}