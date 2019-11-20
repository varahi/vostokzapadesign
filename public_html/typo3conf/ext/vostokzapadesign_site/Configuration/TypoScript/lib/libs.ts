
lib.gallery >
lib.gallery = HMENU
lib.gallery.special = directory
lib.gallery.special.value.data = TSFE:id
lib.gallery {
  1 = TMENU
  1 {
    expAll = 1
    NO.linkWrap = <h2>|</h2>
    NO.doNotLinkIt = 1
  }  
  2 = TMENU
  2 {
    wrap = <div class="gallery">|</div><div class="clearfix"></div>
    NO.allWrap.insertData = 1
    NO.allWrap (
      <div class="gallery__item">|</div>
    )
    NO.ATagTitle.field = description // title    
    NO.stdWrap.override.cObject = FILES
    NO.stdWrap.override.cObject {
      references {
      table = pages
      uid.field = uid
      fieldName = media
      width = 600c
    }
      renderObj = COA
      renderObj {
        10 = IMAGE
        10 {
          file {
            import.data = file:current:publicUrl  
            width = 640c
            height= 480c
            #maxW = 150
            #maxH = 105
          }
          
          altText.data = file:current:alternative
          titleText.data = file:current:title
        }
        20 = TEXT
        20 {
          field = title
          wrap = <div class="gallery__item-caption">|</div>
          #typolink.parameter.field = uid
        }
      }
    }
  }  
}


lib.teaser >
lib.teaser = HMENU
lib.teaser.special = directory
lib.teaser.special.value.data = TSFE:id
lib.teaser {
  #1 = TMENU
  #1 {
  #  expAll = 1
  #  NO.linkWrap = <h2>|</h2>
  #  NO.doNotLinkIt = 1
  #}  
  1 = TMENU
  1 {
    wrap = |
    NO.allWrap.insertData = 0
    NO.doNotLinkIt = 1
    NO.allWrap (
      <div class="news-item-row row">|</div>
    )
    NO.ATagTitle.field = description // title    
    NO.stdWrap.override.cObject = FILES
    NO.stdWrap.override.cObject {
      references {
      table = pages
      uid.field = uid
      fieldName = media
      width = 640c
      height = 480c
    }
      renderObj = COA
      renderObj  {
        10 = IMAGE
        10 {   
          stdWrap.typolink.parameter.field = uid      
          stdWrap.wrap = <div class="col-md-4"><div class="news-image">|</div></div>       
          file {
            #import.data = file:current:uid
            #treatIdAsReference = 1
            import.data = file:current:publicUrl  
            width = 640c
            height= 480c
          }
          altText.data = file:current:alternative
          titleText.data = file:current:title
        }
        20 = TEXT
        20 {
          field = title
          wrap = <div class="col-md-8"><h3>|</h3>
          typolink.parameter.field = uid
        }
        30 = TEXT
        30 {
          field = description
          wrap = <p>|</p></div>          
        }
        
      }
    }
  }  
}


lib.print = COA
lib.print {  
  100 = TEXT
  100.value = <a href="javascript:window.print();">Версия для печати</a>
  100.wrap = <p class="align-right">|</p>
}

lib.logo >
lib.logo = COA
lib.logo {
  wrap = |
  10 = IMAGE
  10 {
    file = {$template_path}/Resources/Public/Images/logo.svg
    altText = {$page.header.logoTitle}
    titleText = {$page.header.logoTitle}
    file.width = 242
    file.height = 50
    stdWrap.typolink.parameter = 1
    stdWrap.wrap = |
    stdWrap.typolink.title = {$page.header.logoTitle}  
  }
}

lib.banner = COA
lib.banner {
  wrap = <div class="header-image">|</div>
  10 = IMAGE
  10 {
    params = class="image-responsive"
    file.treatIdAsReference = 1
    file.import.data = levelmedia: -1,slide
    file.import.listNum = 0
    file.import.override.field = media
    altText.data = page : subtitle // page : title
  } # 10
  
  20 = IMAGE
  20 {
    params = class="image-caption"
    altText.data = page:title

    file = GIFBUILDER
    file {
      XY = [20.w]+58,60
      
      10 = BOX
      10.dimensions = 0,0,[20.w]+58,60
      10.color = #666666
      
      20 = TEXT
      20 {
        text.data = page : subtitle // page : title
        offset = 29,37

        fontColor = #ffffff
        fontFile = typo3conf/ext/vostokzapadesign_site/Resources/Public/fonts/freeset_cyr.ttf
        
        #New parameter
        fontSize = 26  
        
        #Old parameter     
        #fontSize = 19
      } # 20
      
    } # file
    
  } # 20
  
} # lib.banner

[treeLevel = 0]
lib.banner.20 >
[global]

lib.banner2 {
  class = COA
  class {
    10 = TEXT
    10.value = banner
    
    20 = TEXT
    20 {
      value = no-margin-right
      noTrimWrap = | ||
      if.isTrue.field = field_class    
    }
  }
  
  image = COA
  image {
    10 = IMG_RESOURCE
    10 {
      file.import = uploads/tx_templavoila/
      file.import.field = field_image
      file.import.listNum = 0    
    }
    
    wrap =background-image:url(|);
  }
}

lib.counter = CONTENT
lib.counter {
  table = tt_content
  select {
    pidInList = 139
    orderBy = sorting
  }
}


lib.tab_title = COA
lib.tab_title {
  10 = IMG_RESOURCE
  10 {
    stdWrap.wrap = style="background-image: url(|);"
    
    file = GIFBUILDER
    file {
      XY = 171,82
      
      backColor = #ffffff
      
      10 = TEXT
      10 {
        #text.field = field_tab_title_1
        text.current = 1
        fontSize = 11
        offset = 20, 15
        fontColor = #666666
        fontFile = fileadmin/templates/fonts/freeset_cyr.ttf
      }
      
      20 = TEXT
      20 {
        #text.field = field_tab_title_1
        text.current = 1
        fontSize = 11
        offset = 20, 62
        fontColor = #D90007
        fontFile = fileadmin/templates/fonts/freeset_cyr.ttf
      }
      
#      30 = IMAGE
#      30 {
#        file = fileadmin/templates/images/content/arrow-down.gif
#        offset = 151,1
#      }

    } # file
    
  } # 10
  
} # lib.tab_title

# lib.parseFunc_RTE
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.default >
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.class.list >
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.cellpadding.default = 0
lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.tags.table.fixAttrib.cellspacing.default = 0

lib.parseFunc_RTE.externalBlocks.table.stdWrap.HTMLparser.removeTags = p


# 
lib.footerLeft >
lib.footerLeft = RECORDS
lib.footerLeft {
  wrap = |
  source = 3
  dontCheckPid = 1
  tables = tt_content  
}

lib.copyright >
lib.copyright = RECORDS
lib.copyright {
  wrap = <div id="copyright">|</div>
  source = 2,1262
  dontCheckPid = 1
  tables = tt_content  
}



lib.content.right = COA
lib.content.right {
# 5 = LOAD_REGISTER
# 5.defaultHeaderType = graphic_header_pi1

  10= RECORDS
  10.source.current=1
  10.tables = tt_content
  10.wrap = <!--TYPO3SEARCH_begin--> | <!--TYPO3SEARCH_end-->
  
  100 = TEXT
  100.value = <a href="javascript:window.print();">Версия для печати</a>
  100.wrap = <p class="align-right">|</p>
  
  200 < lib.counter

# 999 = RESTORE_REGISTER
}

#PIDinRootline = 62,42,222,9
lib.content.right.20 = CONTENT 
lib.content.right.20 {
  table = tt_content
  select.pidInList = 223
  select.uidInList = 1058
}
#global

[PIDupinRootline = 62,42,222,9]
lib.content.right.20 {
  #1067
  select.uidInList = 1067
}
[global]

#lib.content.right >



/*
lib.content.right.5 = CONTENT 
lib.content.right.5 {
  table = tt_content
  select.pidInList = 224
  select.uidInList = 1061
}
[treeLevel = 0]
lib.content.right.5 > 
[global]
*/
lib.content.right.5 >


lib.calendarLink = CONTENT 
lib.calendarLink {
  table = tt_content
  select.pidInList = 224
  select.uidInList = 1061
}
[treeLevel = 0]
lib.calendarLink > 
[global]

lib.seminarTitle = COA
lib.seminarTitle {
  wrap = <div class="powermail_fieldwrap powermail_fieldwrap_type_select">|</div>
  10 = TEXT
  10 {
    data = page : title    
    wrap = <label for="tx_powermail_pi1[field][seminar]" class="powermail_label powermail_label-no-decoration">|
  }
  20 = TEXT
  20.value = <span>(предварительная запись)</span></label>
  
  30 = TEXT
  30 {
   wrap = <div class="powermail_field"><select class="powermail_select" name="tx_powermail_pi1[field][seminar]">|</select></div> 
   value (
    <option value="0">0</option> 
    <option value="1">1</option> 
    <option value="2">2</option> 
    <option value="3">3</option> 
    <option value="4">4</option> 
    <option value="5">5</option> 
    <option value="6">6</option> 
    <option value="7">7</option> 
    <option value="8">8</option> 
    <option value="9">9</option> 
    <option value="10">10</option>    
   )
  }
}

lib.sTitle >
lib.sTitle = TEXT
lib.sTitle {
  #data = page : title  
  data = page:nav_title // page:title
  wrap = <input class="powermail_form_uid" type="hidden" name="tx_powermail_pi1[field][semtitle]" value="|" />
}

#lib.sTitle >


lib.footerCopyright >
lib.footerCopyright = TEXT
lib.footerCopyright {
	wrap = <div class="footer__info copyright">|</div>
	value = {$page.footer.footerCopyright}
}

lib.developerInfo >
lib.developerInfo = TEXT
lib.developerInfo {
	wrap = <div class="footer__info developer">|</div>
	value = {$page.footer.developerInfo}
}

lib.footerPhone >
lib.footerPhone = TEXT
lib.footerPhone {
	//wrap = <h3>|</h3>
	value = {$page.footer.phone}
}
