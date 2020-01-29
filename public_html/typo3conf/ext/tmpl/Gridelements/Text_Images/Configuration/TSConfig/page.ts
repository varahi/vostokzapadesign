# Page TSConfig:

tx_gridelements.overruleRecords = 1
tx_gridelements.setup {
# ID of Element
    Text_Images {
        title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.text_and_image
        description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.text_and_image
        flexformDS = FILE:EXT:tmpl/Gridelements/Text_Images/Configuration/FlexForms/Configuration.xml
        icon = EXT:tmpl/Gridelements/Text_Images/Resources/Public/Icons/icon.gif
        topLevelLayout = 1
        config {
            colCount = 1
            rowCount = 2
            rows {
                1 {
                    columns {
                        1 {
                            name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.image_area
                            colPos = 0
                        }
                    }
                }
                2 {
                    columns {
                        1 {
                            name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.text_area
                            colPos = 1
                        }
                    }
                }
            }
        }
    }
}