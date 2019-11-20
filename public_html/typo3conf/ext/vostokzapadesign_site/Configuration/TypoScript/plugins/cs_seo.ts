/*
tx_csseo {
    1 = tt_news
    1.enable = GP:tx_ttnews|tt_news
    1.fallback {
        title = title
        description = description
    }    
}
*/

plugin.tx_csseo.sitemap {
    extensions {
        school_news {
	        table = tt_news
            //additionalParams = tx_inkluvivaicd10_search[controller]=ClassItem&tx_inkluvivaicd10_search[action]=listCategory&tx_inkluvivaicd10_search[classItem]
            additionalParams = tx_ttnews[tt_news]
            useCacheHash = 1

        // string; add custom query options : title LIKE '%top%'
        // additionalWhereClause = tx_inkluvivaicd10_domain_model_classitem.kind LIKE '%category%'

        // comma separated list; page uid where are the records stored
            storagePid = 4 

        // int; extend the storage pid by a recursive level
            //recursive = {$plugin.tx_csseo.sitemap.extensions.icd10.recursive}

        // int; page uid where the details are shown
            detailPid = 13

        // comma separated list; configure the available languages, e.g.: 0,1
            //languageUids = {$plugin.tx_csseo.sitemap.extensions.icd10.languageUids}

        }

        ikebana_sogetsu {
	        table = tt_news
            additionalParams = tx_ttnews[tt_news]
            useCacheHash = 1
            storagePid = 287
            detailPid = 333

        }

    }
}
