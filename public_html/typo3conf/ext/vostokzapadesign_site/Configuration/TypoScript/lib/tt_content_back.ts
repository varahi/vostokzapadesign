tt_content.menu.20.1 {
  wrap = <ul class="sitemap">|</ul>
  1.expAll = 1
  
  2 = TMENU
  2.expAll = 1
  2.wrap = <ul>|</ul>
  2.NO.wrapItemAndSub = <li>|</li>
  
  3 < .2
  4 < .3
  5 < .4
}


# graphic header
lib.stdheader {
  10.graphic_header_pi1  = COA
  10.graphic_header_pi1 {
    
    10 = COA
    10 {
      10 = IMG_RESOURCE
      10 {
        file = GIFBUILDER
        file {
          #          XY = {$plugin.graphic_header_pi1.backgroundSize}
          XY = [20.w]+2,[20.h]+1
          backColor = {$plugin.graphic_header_pi1.backgroundColor}
          20 = TEXT
          20 {            
            text < lib.stdheader.10.setCurrent
            offset = {$plugin.graphic_header_pi1.textOffset}
            fontFile = {$plugin.graphic_header_pi1.fontFile}
            fontSize = {$plugin.graphic_header_pi1.fontSize}
            fontColor = {$plugin.graphic_header_pi1.fontColor}
            
          } # 20
          
        } # file
        
        stdWrap.wrap = background-image: url(|);
      } # 10
      
      15 = TEXT
      15.data = TSFE:lastImgResourceInfo|1
      15.noTrimWrap = | height:|px;|
      
      wrap = <h1 style="|" class="header-graphic">
    }
    
    20 = TEXT
    20.field = header
    20.htmlSpecialChars = 1
    
    30 = TEXT
    30.value = </h1>
    
  } # 10.graphic_header_pi1
  
} # lib.stdheader



# image.20
tt_content.image.20 {
  layout.25 >

  layout.25 = COA
  layout.25 {
    10 = COA
    10 {
      10 = TEXT
      10.dataWrap = {register:rowWidthPlusTextMargin}
      10.wrap = |+{$image.addWidth}
      stdWrap.prioriCalc = intval
    }
    wrap =<div class="csc-textpic csc-textpic-intext-right-nowrap###CLASSES###">###IMAGES###<div style="margin-right:|px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
  }

  layout.26 >

  layout.26 = COA
  layout.26 {
    10 = COA
    10 {
      10 = TEXT
      10.dataWrap = {register:rowWidthPlusTextMargin}
      10.wrap = |+{$image.addWidth}
      stdWrap.prioriCalc = intval
    }
    wrap = <div class="csc-textpic csc-textpic-intext-left-nowrap###CLASSES###">###IMAGES###<div style="margin-left:|px;">###TEXT###</div></div><div class="csc-textpic-clear"><!-- --></div>
  }

  
  rendering {
    dl {
      fallbackRendering >
      oneImageStdWrap.outerWrap.cObject = COA
      oneImageStdWrap.outerWrap.cObject {
        10 = TEXT
        10.value = <dl class="csc-textpic-image###CLASSES###" style="width:
       
        20 = COA
        20 {
          10 = TEXT
          10.dataWrap = {register:imagespace}
          10.wrap = |+{$image.addWidth}
          stdWrap.prioriCalc = intval
        }
        
        30 = TEXT
        30.value = px;"> | </dl>
      }
      oneImageStdWrap.dataWrap =
    }
  }
}


#[tt_content] frame.25

tt_content.stdWrap.innerWrap.cObject {
  25 = TEXT
  25.value = <div style="padding: 0 0 0 10px;">|</div>
}



# [tt_content] menu.20.4
tt_content.menu.20.4 >
tt_content.menu.20.4 = HMENU
tt_content.menu.20.4 {
  wrap = <div class="csc-menu csc-menu-4">|</div>
  special = directory
  
  1 = TMENU
  1.NO {
    allWrap = <p>|</p>
    allStdWrap.override {
      if.isTrue.data = field : abstract // field : description
      cObject = COA
      cObject {
        10 = TEXT
        10.field = nav_title // title
        10.typolink.parameter.data = field : uid
        10.htmlSpecialChars = 1
        
        20 = TEXT
        20.data = field : abstract // field : description
        20.wrap = <br />|
        
        wrap = <p>|</p>
      }
    }
  }
}
/*
tt_content.menu.20.4 < tt_content.menu.20.default

tt_content.menu.20 {
  4.wrap = <div class="csc-menu csc-menu-4">|</div>
  4.special = directory

  4.1.NO {
    allWrap = <p>|</p>
    after.required = 1
    after.data = field : abstract // field : description // field : subtitle
    after.htmlSpecialChars = 1
    after.wrap = </p><p class="csc-abstract">|
  }
}
*/


# [tt_content] menu.20.7

tt_content.menu.20.7 >
tt_content.menu.20.7 = HMENU
tt_content.menu.20.7 {
  wrap = <div class="csc-menu csc-menu-7">|</div>
  special = directory
  
  1 = TMENU
  1.NO {
    allStdWrap.override {
#      if.isTrue.data = field : abstract // field : description
      if.isTrue.field = abstract // description
      cObject = COA
      cObject {
        10 = IMAGE
        10.file.import = uploads/media/
        10.file.import.field = media
        10.file.import.listNum = 1
        10.file.maxW = 70
        10.file.maxH = 70
        10.imageLinkWrap = 1
        10.imageLinkWrap {
          enable = 1
          title = Изображение
          bodyTag = <BODY bgColor="white">
          wrap = <A href="javascript:close();"> | </A>
          width = 800m
          height = 600
          JSwindow = 1
          JSwindow.newWindow = 1
          JSwindow.expand = 17,20
        }

        10.params = class="img-gborder-10 float-left" style="margin-right: 20px; margin-bottom: 20px;"
        

        20 = COA
        20 {
          10 = TEXT
          10.field = title
          10.typolink.parameter.data = field : uid
          10.htmlSpecialChars = 1
          
          20 = TEXT
          20.data = field : abstract
          20.wrap = <br /><span class="lightgrey">|</span>

          wrap = <p class="no-margin-top">|</p>
        }
        
        30 = TEXT
        30.data = field : description
        30.wrap = <p>|</p><div class="clear"><!-- // --></div>
        
      }
    }
  }
}