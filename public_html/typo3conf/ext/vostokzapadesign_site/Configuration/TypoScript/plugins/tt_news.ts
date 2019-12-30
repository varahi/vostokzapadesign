#config.admPanel = 1

# include the php script for the pageBrowser userfunction
includeLibs.userPageBrowserFunc = EXT:tt_news/res/rmdUserPageBrowserFunc.php

plugin.tt_news {
  #templateFile = fileadmin/templates/plugins/tt_news/tt_news.html
  templateFile = {$template_path}/Resources/Private/Templates/Extensions/tt_news/tt_news.html
  
  //do not use backPid in links (SEO)
  dontUseBackPid = 1
  
  usePiBasePagebrowser = 1
  
  # call user function
  #userPageBrowserFunc = user_substPageBrowser2
  
  pageBrowser {
    # не делаем ссылки для активной страницы
    dontLinkActivePage = 1
    # запрещаем отображание ссылок "первая" и "последняя"
    showFirstLast = 0
    # запрещаем показ текста "страница" перед номером страницы
    showPBrowserText = 0
    # задаем отображение текста "Страницы: "
    showResultCount = 1
    doNotShowNextPrev = 1
    
    pagefloat = center
    maxPages = 5
    
    browseLinksWrap = <ul class="paginator">|</ul>
    activeLinkWrap = <li class="current">|</li>
    inactiveLinkWrap = <li>|</li>
    disabledLinkWrap = |
    showResultsWrap = <span class="lightgrey float-left">|</span>


    showRange = 0
    
    
    #actPage_stdWrap.wrap = <li class="current">|</li>
    #page_stdWrap.wrap = <li>|</li>
  }

  archiveTypoLink.parameter = 27
  archiveTypoLink.ATagParams = class="link-more"


  general_stdWrap >
  
  limit = 20

  latestLimit = 2
  
  displayLatest.date_stdWrap.strftime = %d/%m/%Y
  displayList.date_stdWrap.strftime = %d/%m/%Y
  displaySingle.date_stdWrap.strftime = %d/%m/%Y
  
  displaySingle {
    # add parseFunc to the subheader
    subheader_stdWrap.parseFunc < lib.parseFunc_RTE
    # prevent adding of <p> tags
    subheader_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
    subheader_stdWrap.wrap = |
    # add parseFunc to the bodytext
    content_stdWrap.parseFunc < lib.parseFunc_RTE
    linksItem_stdWrap.wrap = |
    # add parseFunc to the links field
    linksItem_stdWrap.parseFunc < lib.parseFunc_RTE
    # prevent adding of <p> tags
    #linksItem_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
  }
  
  displayList {
    # add parseFunc to the subheader
    subheader_stdWrap.parseFunc < lib.parseFunc_RTE
    # prevent adding of <p> tags
    subheader_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
    subheader_stdWrap.wrap = |
    # add parseFunc to the bodytext
    content_stdWrap.parseFunc < lib.parseFunc_RTE
    linksItem_stdWrap.wrap = |
    # add parseFunc to the links field
    linksItem_stdWrap.parseFunc < lib.parseFunc_RTE
    # prevent adding of <p> tags
    #linksItem_stdWrap.parseFunc.nonTypoTagStdWrap.encapsLines.nonWrappedTag >
    
#    image >
     image.file.maxW >
     image.file.maxH >
     image.file.width = 640c
     image.file.height = 480c-70
      subheader_stdWrap.append >
      subheader_stdWrap.wrap = |
      subheader_stdWrap.crop = 200 | ... | 1
  }   
   
  _LOCAL_LANG.ru {
    backToList = Назад к ленте новостей
    goToArchive = Все новости
    pi_list_browseresults_displays = Страницы:&nbsp;
   # pi_list_browseresults_prev =
   # pi_list_browseresults_next =
   pi_list_browseresults_page =
   nextArticle = 
   prevArticle =
   pi_list_browseresults_next =
   pi_list_browseresults_prev =
  }
  
}



[globalVar = GP:tx_ttnews|tt_news > 0]
plugin.tt_news.defaultCode = SINGLE
[else]
plugin.tt_news.defaultCode = LIST
[global]