#
# Table structure for table 'tt_content'
#
CREATE TABLE tt_content (
  spaceBefore smallint (5) DEFAULT '' NOT NULL,
  spaceAfter smallint (5) DEFAULT '' NOT NULL,
  cropscaling tinyint(3) DEFAULT '0' NOT NULL,
  cropscaling_ratio varchar(100) DEFAULT '0' NOT NULL,
  cropscaling_orient tinyint(3) DEFAULT '0' NOT NULL
);
