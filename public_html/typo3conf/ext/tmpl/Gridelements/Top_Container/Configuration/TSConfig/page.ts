# Page TS
tx_gridelements {
    overruleRecords = 1
    setup {
        Top_Container {
            title = Top Container
            description = Top container with pre-selected classes
            icon = EXT:tmpl/Gridelements/Top_Container/Resources/Public/Icons/icon.gif
            topLevelLayout = 1
            config {
                colCount = 1
                rowCount = 2
                rows {
                    1 {
                        columns {
                            1 {
                                name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.header
                                colPos = 0
                            }
                        }
                    }
                    2 {
                        columns {
                            1 {
                                name = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:gridelements.content
                                colPos = 1
                            }
                        }
                    }
                }
            }
        }
    }
}
