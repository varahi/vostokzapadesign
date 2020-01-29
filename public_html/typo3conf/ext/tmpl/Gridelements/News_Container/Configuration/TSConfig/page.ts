# Page TS
tx_gridelements {
    overruleRecords = 1
    setup {
        News_Container {
            title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.news_container
            description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.news_container_description
            flexformDS = FILE:EXT:tmpl/Gridelements/News_Container/Configuration/FlexForms/Configuration.xml
            icon = EXT:tmpl/Gridelements/News_Container/Resources/Public/Icons/icon.gif
            topLevelLayout = 1
            config {
                colCount = 1
                rowCount = 1
                rows {
                    1 {
                        columns {
                            1 {
                                name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.content
                                colPos = 0
                            }
                        }
                    }
                }
            }
        }
    }
}
