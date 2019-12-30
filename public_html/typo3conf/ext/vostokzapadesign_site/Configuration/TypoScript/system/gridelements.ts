 tt_content.gridelements_pi1.20.10.setup {
  
  # Two columns
  1 < lib.gridelements.defaultGridSetup
  1 {
    wrap = <div class="row">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = <div class="col-md-4 push-md-8">|</div>
        innerWrap =  |
      }
      1 < .default
      1 {
        wrap = <div class="col-md-8  pull-md-4">|</div>
        innerWrap =  |
      }           
    } # end columns
  } # end grid 1
  
  
  # Two columns 
  2 < lib.gridelements.defaultGridSetup
  2 {
    wrap = <div class="row">|</div>
    innerWrap = |
    columns {
      # colPos ID
      0 < .default
      0 {
        wrap = <div class="col-md-8 push-md-4">|</div>
        innerWrap =  |
      }
      1 < .default
      1 {
        wrap = <div class="col-md-4  pull-md-8">|</div>
        innerWrap =  |
      }           
    } # end columns
  } # end grid 2
  
}