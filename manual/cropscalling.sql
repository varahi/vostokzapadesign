ALTER TABLE tt_content CHANGE `tx_nwtimagecrop_cropscaling` `cropscaling` tinyint(3);
ALTER TABLE tt_content CHANGE `tx_nwtimagecrop_cropscaling_ratio` `cropscaling_ratio` varchar(100);
ALTER TABLE tt_content CHANGE `tx_nwtimagecrop_cropscaling_orient` `cropscaling_orient` tinyint(3);
