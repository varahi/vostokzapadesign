# default configuration to show a sitemap.xml for tx_fuchscatalog #

plugin.tx_csseo.sitemap {
    extensions {
    # configuration for an extension
        products {
        # string; the table name where the records are stored
            table = tx_fuchscatalog_domain_model_item

        # string; will be attached to the typolink, more params are possible, the last one is the record param
            //additionalParams = tx_inkluvivaicd10_search[controller]=ClassItem&tx_inkluvivaicd10_search[action]=listCategory&tx_inkluvivaicd10_search[classItem]
            additionalParams = tx_fuchscatalog_fuchscatalog[item]

        # boolean; use cHash on url creation
            useCacheHash = 1

        # string; add custom query options : title LIKE '%top%'
            //additionalWhereClause = tx_inkluvivaicd10_domain_model_classitem.kind LIKE '%category%'

        # comma separated list; page uid where are the records stored
            //storagePid = {$plugin.tx_csseo.sitemap.extensions.icd10.storagePid}
            storagePid = 14

        # int; extend the storage pid by a recursive level
            //recursive = {$plugin.tx_csseo.sitemap.extensions.icd10.recursive}

        # int; page uid where the details are shown
            //detailPid = {$plugin.tx_csseo.sitemap.extensions.icd10.detailPid}
            detailPid = 21

        # comma separated list; configure the available languages, e.g.: 0,1
            //languageUids = {$plugin.tx_csseo.sitemap.extensions.icd10.languageUids}
        }


        oils {
        # string; the table name where the records are stored
            table = tx_fuchscatalog_domain_model_item

        # string; will be attached to the typolink, more params are possible, the last one is the record param
            //additionalParams = tx_inkluvivaicd10_search[controller]=ClassItem&tx_inkluvivaicd10_search[action]=listCategory&tx_inkluvivaicd10_search[classItem]
            additionalParams = tx_fuchscatalog_fuchscatalog[item]

        # boolean; use cHash on url creation
            useCacheHash = 1

        # string; add custom query options : title LIKE '%top%'
            //additionalWhereClause = tx_inkluvivaicd10_domain_model_classitem.kind LIKE '%category%'

        # comma separated list; page uid where are the records stored
            //storagePid = {$plugin.tx_csseo.sitemap.extensions.icd10.storagePid}
            storagePid = 37

        # int; extend the storage pid by a recursive level
            //recursive = {$plugin.tx_csseo.sitemap.extensions.icd10.recursive}

        # int; page uid where the details are shown
            //detailPid = {$plugin.tx_csseo.sitemap.extensions.icd10.detailPid}
            detailPid = 36
        }


        dealers {
        # string; the table name where the records are stored
            table = tx_fuchsdealers_domain_model_dealer

        # string; will be attached to the typolink, more params are possible, the last one is the record param
            //additionalParams = tx_inkluvivaicd10_search[controller]=ClassItem&tx_inkluvivaicd10_search[action]=listCategory&tx_inkluvivaicd10_search[classItem]
            additionalParams = tx_fuchsdealers_fuchsdealers[dealer]

        # boolean; use cHash on url creation
            useCacheHash = 1

        # string; add custom query options : title LIKE '%top%'
            //additionalWhereClause = tx_inkluvivaicd10_domain_model_classitem.kind LIKE '%category%'

        # comma separated list; page uid where are the records stored
            //storagePid = {$plugin.tx_csseo.sitemap.extensions.icd10.storagePid}
            storagePid = 10

        # int; extend the storage pid by a recursive level
            //recursive = {$plugin.tx_csseo.sitemap.extensions.icd10.recursive}

        # int; page uid where the details are shown
            //detailPid = {$plugin.tx_csseo.sitemap.extensions.icd10.detailPid}
            detailPid = 23

        # comma separated list; configure the available languages, e.g.: 0,1
            //languageUids = {$plugin.tx_csseo.sitemap.extensions.icd10.languageUids}

        }

    }
}