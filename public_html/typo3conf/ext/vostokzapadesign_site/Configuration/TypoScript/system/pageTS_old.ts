/*
RTE.default {
  contentCSS = typo3conf/ext/vostokzapadesign_site/Resources/Public/css/rte.css
  proc.allowedClasses (
    inside, link-more, link-back, link-pdf, link-word,
    link-more-2, table-1, table-2, odd, attention, phone, price,
    lightgrey, hotline, red, smaller, bigger, no-margin-top,
    no-margin-right, no-margin-bottom, no-margin-left,
    no-margin, float-left
  )

  buttons.textstyle.tags.span.allowedClasses = odd, attention, phone, price, lightgrey, hotline, red, smaller, bigger, normal
  buttons.link.properties.class.allowedClasses = link-more, link-back, link-pdf, link-word, link-more-2
  classesAnchor = link-more, link-back, link-pdf, link-word, link-more-2
  buttons.blockstyle.tags.table.allowedClasses = table-1, table-2
  showTagFreeClasses = 1
}

TSFE.jumpURL_HTTPStatusCode = 301

TCEFORM.tt_content.section_frame{
  addItems.25 = Отступ слева 10px
}

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