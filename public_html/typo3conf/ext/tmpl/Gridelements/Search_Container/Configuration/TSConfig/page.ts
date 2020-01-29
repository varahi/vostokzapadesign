# Page TS
tx_gridelements {
    overruleRecords = 1
    setup {
        Search_Container {
            title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.search_container
            description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.grid.search_container_description
            icon = EXT:tmpl/Gridelements/Search_Container/Resources/Public/Icons/icon.gif
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
