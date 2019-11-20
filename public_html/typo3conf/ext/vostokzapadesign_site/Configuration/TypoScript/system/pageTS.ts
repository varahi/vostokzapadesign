TCEFORM.tt_content {
  layout {
    altLabels {
      #1 = Bootstrap рендеринг контента        
      #2 = Стандартный рендеринг контента (не bootstrap)
      #3 = 
    }
    addItems{
      #4 = Four Columns
      }
    }
}


RTE.classes{
  odd {
		name = odd
    value = color: #000000;
   } 
  attention {
		name = attention
    value = color: #000000;
   } 
  phone {
		name = phone
    value = color: #000000;
   }       
  price {
		name = price
    value = color: #000000;
   }   
  lightgrey {
		name = lightgrey
    value = color: #000000;
   }   
  hotline {
		name = hotline
    value = color: #000000;
   }   
  red {
		name = red
    value = color: #000000;
   }   
  smaller {
		name = smaller
    value = color: #000000;
   }   
  bigger {
		name = bigger
    value = color: #000000;
   }   
  bigger {
		name = bigger
    value = color: #000000;
   }    
  no-margin-top {
		name = no-margin-top
    value = color: #000000;
   } 
  no-margin-right {
		name = no-margin-right
    value = color: #000000;
   } 
  no-margin-bottom {
		name = no-margin-bottom
    value = color: #000000;
   } 
  no-margin-left {
		name = no-margin-left
    value = color: #000000;
   } 
  no-margin {
		name = no-margin
    value = color: #000000;
   }          
  float-left {
		name = float-left
    value = color: #000000;
   }          
  table-1 {
		name = table-1
    value = color: #000000;
   }  
  table-2 {
		name = table-2
    value = color: #000000;
   }        
   
 # Inline text  
  inside {
		name = inside
    value = color: #000000;
   }             
  link-more {
		name = link-more
    value = color: #000000;
   } 
  link-back {
		name = link-back
    value = color: #000000;
   }  
  link-pdf {
		name = link-pdf
    value = color: #000000;
   }      
                    
}

RTE.default {
  ignoreMainStyleOverride = 1 
  useCSS = 1
  showTagFreeClasses = 1
  enableWordClean = 1  
  contentCSS = typo3conf/ext/vostokzapadesign_site/Resources/Public/css/rte.css
  
	buttons {
		blockstyle.tags.table.allowedClasses := addToList(table-1, table-2)
		blockstyle.tags.td.allowedClasses := addToList(odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal)
		blockstyle.tags.tr.allowedClasses := addToList(odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal)
	}  

  buttons.textstyle.tags.span.allowedClasses = attention, bigger, hotline, lightgrey, normal, odd, phone, price, red, smaller, no-margin-top, no-margin-right, no-margin-bottom, no-margin-left, no-margin, float-left
  
  proc.allowedClasses (
    inside, link-more, link-back, link-pdf, link-word,
    link-more-2, table-1, table-2, odd, attention, phone, price,
    lightgrey, hotline, red, smaller, bigger, no-margin-top,
    no-margin-right, no-margin-bottom, no-margin-left,
    no-margin, float-left
  )
  
  
  inlineStyle.inline-text (
    span.attention { color: #000000; }
    span.bigger { color: #000000; }
    span.hotline { color: #000000; }
    span.lightgrey { color: #000000; }      
    span.normal { color: #000000; }
    span.odd { color: #000000; }
    span.phone { color: #000000; }
    span.price { color: #000000; }    
    span.red { color: #000000; }
    span.smaller { color: #000000; } 
    span.no-margin-top { color: #000000; }
    span.no-margin-right { color: #000000; }
    span.no-margin-bottom { color: #000000; }    
    span.no-margin-left { color: #000000; }
    span.no-margin { color: #000000; } 
    span.float-left { color: #000000; }                  
  )  
  

  classesCharacter = odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal
  #classesCharacter := addToList(odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal)
 	classesTable = odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal
  classesTD = odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal
  classesTR = odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal
  
  classesLinks = link-more, link-back, link-pdf, link-word, link-more-2
  classesAnchor = link-more, link-back, link-pdf, link-word, link-more-2
  classesTable = table-1, table-2
  #showTagFreeClasses = 1
}

#TSFE.jumpURL_HTTPStatusCode = 301

TCEFORM.tt_content.section_frame{
  addItems.25 = Отступ слева 10px
}
TCEFORM.tt_content.section_frame.addItems.26 = Скрывать блок на мобильных устройствах
TCEFORM.tt_content.section_frame.addItems.27 = Адаптивное видео

/*
mod.rmd_htmlextractor {
  1 {
#   url = http://89.108.82.238/index.php?id=13
   url = http://www.vostokzapadesign.ru/index.php?id=158
   rule = div#header:outter
   file = fileadmin/templates/phpbb_header.html
   prefix_url = http://www.vostokzapadesign.ru/
  }
}
*/