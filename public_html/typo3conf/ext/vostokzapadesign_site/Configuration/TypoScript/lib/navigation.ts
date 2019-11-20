fMWcObject = COA
fMWcObject {             

  20 = TEXT
  20.value = 838
  20.override.data = register:fullMenuWidth
  #20.wrap = -|
  
  30 = TEXT
  30.data = TSFE:lastImgResourceInfo|0
  30.wrap = -|-1
  
  stdWrap.prioriCalc = intval
}

textPX = COA
textPX {
  10 = TEXT
  10.data = TSFE:lastImgResourceInfo|0 || TSFE:lastImgResourceInfo|0 |*||*| TSFE:lastImgResourceInfo|0 || register:fullMenuWidth
  10.noTrimWrap = | width: |px;|
}

/*
textPX = TEXT
textPX {
  data = TSFE:lastImgResourceInfo|0
  noTrimWrap = | width: |px;|
}

paddingPX = COA
paddingPX {
  10 = COA
  10.10 = COA
  10.10.10 = TEXT
  10.10.10.dataWrap = 0/2 || 0/2 |*||*| 0/2 || ({register:fullMenuWidth}+1)/2
  10.10.stdWrap.prioriCalc = intval
  10.stdWrap.noTrimWrap = | padding-left: |px;|

  20 = COA
  20.10 = COA
  20.10.10 = TEXT
  20.10.10.dataWrap = 0/2 || 0/2 |*||*| 0/2 || ({register:fullMenuWidth}+1)-(({register:fullMenuWidth}+1)/2)
  20.10.stdWrap.prioriCalc = intval
  20.stdWrap.noTrimWrap = | padding-right: |px;|
}
*/


#Main menu
lib.smMenu >
lib.smMenu = HMENU
lib.smMenu {
  wrap (
    <nav class="navbar navbar-light">
      <div class="collapse navbar-toggleable-sm" id="navbar-header">|</div>
    </nav>
  ) 
  #maxItems = 6
  #includeNotInMenu = 1
  #excludeUidList = {$page.menu.excludeUidList}
    1 = TMENU
    1 {
        expAll = 1
        wrap = <ul id="main-menu" class="main-menu sm sm-clean">|</ul>
        NO.wrapItemAndSub = <li>|</li>||<li>|</li>|*|<li>|</li>|*|<li class="last-item">|</li>
        CUR = 1
        CUR.wrapItemAndSub = <li class="active">|</li>||<li class="active">|</li>|*|<li class="active">|</li>|*|<li class="last-item active">|</li>      
        ACT = 1
        #CUR.ATagParams = class="active" 
        ACT < .CUR    
    } 
}

# mmenu
lib.mMenu = COA
lib.mMenu  {
  10 = TEXT
  10.value (
    <a id="nav-icon" href="#menu">
      <span></span>
      <span></span>
      <span></span>
    </a>    
  )
  20 = HMENU
  20 {
  wrap = <nav id="menu">|</nav>
   1 = TMENU
   1 {
     expAll = 1
      wrap = <ul>|</ul>
      NO.wrapItemAndSub = <li>|</li>
      ACT = 1
      ACT.wrapItemAndSub = <li>|</li>
   }
   2 < .1
   2.wrap = <ul>|</ul>
   3 < .1
   3.wrap = <ul>|</ul>   
  }
}


# lib.navigation.submenu
lib.navigation.submenu = HMENU
lib.navigation.submenu {
  special = directory
  special.value = {$const.rootPageID}
  
  1 = TMENU
  1.NO.doNotShowLink = 1
  
  2 = TMENU
  2 {
    NO.linkWrap = <li>|</li>
    
    ACT = 1
    ACT.linkWrap = <li class="active">|</li>
    
    wrap = <ul class="left-menu">|</ul>
  } # 2 end
  
  3 = TMENU
  3 {
    NO.linkWrap = <li>|</li>
    
    ACT = 1
    ACT.linkWrap = <li class="active">|</li>

    wrap = <li><ul>|</ul></li>
  } # 3 end
  
  4 = TMENU
  4 {
    NO.linkWrap = <li>|</li>
    
    ACT = 1
    ACT.linkWrap = <li class="active">|</li>

    wrap = <li><ul>|</ul></li>
  } # 4 end
}


# lib.navigation.shortcuts
lib.navigation.shortcuts = HMENU
lib.navigation.shortcuts {
  special = directory
  special.value = 22
  
  1 = TMENU
  1 {
    noBlur = 1
    
    wrap =  <div id="header-phone">8 (495) 641-83-51</div><ul id="shortcuts">|</ul>

    NO.linkWrap = <li>|</li>
    NO.doNotLinkIt = 1
    NO.stdWrap.cObject = COA
    NO.stdWrap.cObject {
      
      10 = COA
      10 {
        wrap = <a|>
        
        10 = TEXT
        10.typolink.parameter.field = uid
        10.typolink.returnLast = url
        10.noTrimWrap = | href="|"|
        
        20 = IMG_RESOURCE
        20 {
          file.import = uploads/media/
          file.import.field = media
          file.import.listNum = 0
          stdWrap.noTrimWrap = | style="background-image: url(/|);"|
        }
      }
      
      20 = TEXT
      20.field = title

      30 = TEXT
      30.value = </a>
    }
  }
}


# lib.navigation.footermenu
lib.navigation.footermenu = HMENU
lib.navigation.footermenu {
  #special = directory
  #special.value = {$const.rootPageID}
	special = list
	special.value = {$page.footer.footerMenu}  

  1 = TMENU
  1 {
    wrap = <ul class="footer__menu">|</ul><div class="clearfix"></div>
    NO {
      #doNotLinkIt = 1
      #stdWrap.typolink.parameter = uid
      allStdWrap.wrap = <li>*</li>||<li><span>|</span>*</li>
      allStdWrap.wrap.splitChar = *
    }
  }
}


lib.navigation.mapLink >
lib.navigation.mapLink = TEXT
lib.navigation.mapLink {
	value = {$page.footer.mapTitle}
	stdWrap {
		typolink.parameter = {$page.footer.mapLink}
		typolink.ATagParams = rel="nofollow"
		//wrap = <p>|</p>		
	}   	
}





