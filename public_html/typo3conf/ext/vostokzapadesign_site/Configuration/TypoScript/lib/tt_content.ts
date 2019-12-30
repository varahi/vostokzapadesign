tt_content.stdWrap.innerWrap.cObject {                                                                                                                                              
  26 = TEXT                                                                                                                                                                         
  26.value = <div class="hidden-xs hidden-md hidden-sm">|</div>  
  27 = TEXT                                                                                                                                                                         
  27.value = <div class="video">|</div>                                                                                                                                                         
}

#[globalVar = TCEFORM.tt_content.layout = 1]
tt_content.image.5 = COA
tt_content.image.5.10 = LOAD_REGISTER
tt_content.image.5.10 {
        bootstrapImageGrid.cObject = CASE
        bootstrapImageGrid.cObject {
                setCurrent.field = imagecols
                key.field = imagecols
                default = TEXT
                default.value = 1
                1 = TEXT
                1.value = 12
                2 = TEXT
                2.value = 6
                3 = TEXT
                3.value = 4
                4 = TEXT
                4.value = 3
                5 < 4
                6 = TEXT
                6.value = 2
                7 < 12
                8 < 12
                12 = TEXT
                12.value = 1
        }
}

tt_content.image.5.20 = LOAD_REGISTER
tt_content.image.5.20 {
        bootstrapImageWidth.cObject = CASE
        bootstrapImageWidth.cObject {
                setCurrent.field = imagecols
                key.field = imagecols
                default = TEXT
                default.field = imagewidth
                1 = TEXT
                1.value = 1000
                2 = TEXT
                2.value = 600
                3 = TEXT
                3.value = 600
                4 = TEXT
                4.value = 600
                6 = TEXT
                6.value = 600
                12 = TEXT
                12.value = 600
        }
}

tt_content.image.5.30 = COA
tt_content.image.5.30 = LOAD_REGISTER
tt_content.image.5.30 {
    bootstrapImageHeight.cObject = CASE
    bootstrapImageHeight.cObject {
    stdWrap.insertData = 1
      setCurrent.field = imageheight
      key.field = imageheight
      default = TEXT
      default {
        if {
          value = 1
          isGreaterThan.field = imageheight
        }
        #value = style="height:{field:imageheight}px"
      }
        
        
    }
}


tt_content.image.20 {
    1.file.width.override.data = register:bootstrapImageWidth
    1.imageLinkWrap {
      enable.ifEmpty.typolink.parameter.import.data = TSFE:lastImageInfo|3 
      typolink.parameter.import.data = TSFE:lastImageInfo|3
      # TSFE:lastImageInfo|3 - выводит ссылку на картинки только из Temp
      stdWrap.dataWrap = |
    
    }
        rendering {
          ul {
          noRowsStdWrap.insertData = 1
          noRowsStdWrap.wrap = <div class="row row-images-list"> | </div>
          imageRowStdWrap.dataWrap = <div class="row row-images-list"> | </div>
          imageLastRowStdWrap.dataWrap = <div class="row row-images-list"> | </div>
          oneImageStdWrap.dataWrap = <div class="col-md-{register:bootstrapImageGrid} col-sm-{register:bootstrapImageGrid}" ><figure class="_csc-textpic-imagewrap csc-textpic-image" {register:bootstrapImageHeight}> | </div>
          caption {
              wrap = </figure> |
              stdWrap.required = 1
              stdWrap.wrap = <div class="caption"><p>|</p></div>
          }
        }
        simple < ul
    }
    renderMethod = ul
        imageStdWrap.dataWrap = |
        imageStdWrapNoWidth.wrap = |
        imageColumnStdWrap.dataWrap = |
        caption.1.br = 0
        equalH.field = 
        layout {
        stdWrap.insertData = 1
                # above-center
                default.value = ###IMAGES######TEXT###
                # above-right
                1.value = ###IMAGES######TEXT###
                # above-left
                2.value = ###IMAGES######TEXT###
                # below-center
                8.value = ###IMAGES######TEXT###
                # below-right
                9.value = ###IMAGES######TEXT###
                # below-left
                10.value = ###IMAGES######TEXT###
                # intext-right
                17.value = ###IMAGES######TEXT###
        17.override = ###IMAGES######TEXT###
                # intext-left
                18.value = ###IMAGES######TEXT###
                # beside-text-right
                25.value = ###IMAGES######TEXT###
                # beside-text-left
                26.value = ###IMAGES######TEXT###
        }
}

tt_content.image.20.2 = RESTORE_REGISTER
tt_content.textpic.5 = < tt_content.image.5
tt_content.textpic.20.text.wrap =
tt_content.textpic = COA
tt_content.textpic {
  10 = COA
  10.if.value = 25
  10.if.isLessThan.field = imageorient
  10.10 = < lib.stdheader
  20  = < tt_content.image.20
  20 {
    text.10 = COA
    text.10 {
      if.value = 24
      if.isGreaterThan.field = imageorient
      10 = < lib.stdheader
      10.stdWrap.dataWrap = |
    }
    text.20 = < tt_content.text.20
    text.wrap =  |
    
     layout {
        stdWrap.insertData = 1
                # above-center
                default.value = <div class="row"><div class="col-md-12">###IMAGES###</div><div class="col-md-12">###TEXT###</div></div>
                # above-right
                1.value = <div class="row"><div class="col-md-12">###IMAGES###</div><div class="col-md-12">###TEXT###</div></div>
                # above-left
                2.value = <div class="row"><div class="col-md-12">###IMAGES###</div><div class="col-md-12">###TEXT###</div></div>
                # below-center
                8.value = <div class="row"><div class="col-md-12">###TEXT###</div><div class="col-md-12">###IMAGES###</div></div>
                # below-right
                9.value = <div class="row"><div class="col-md-12">###TEXT###</div><div class="col-md-12">###IMAGES###</div></div>
                # below-left
                10.value = <div class="row"><div class="col-md-12">###TEXT###</div><div class="col-md-12">###IMAGES###</div></div>
                # intext-right
                17.value = <div class="row"><div class="col-md-9">###TEXT###</div><div class="col-md-3">###IMAGES###</div></div>
                17.override = <div class="row"><div class="col-md-9">###TEXT###</div><div class="col-md-3">###IMAGES###</div></div>
                # intext-left
                18.value = <div class="row"><div class="col-md-3">###IMAGES###</div><div class="col-md-9">###TEXT###</div></div>
                # beside-text-right
                25.value = <div class="row"><div class="col-md-9">###TEXT###</div><div class="col-md-3">###IMAGES###</div></div>
                # beside-text-left
                26.value = <div class="row"><div class="col-md-3">###IMAGES###</div><div class="col-md-9">###TEXT###</div></div>
        }
  }
}
#[global]
