# ******************************************************************************
#	(c) 2013 Georg Ringer <typo3@ringerge.org>
#
#	You can redistribute it and/or modify it under the terms of the
#	GNU General Public License as published by the Free Software Foundation;
#	either version 2 of the License, or (at your option) any later version.
# ******************************************************************************

# **********************************************************
# Configuration for rgsmoothgallery, using flexslider
# **********************************************************


#-------------------------------------------------------------------------------
#	Configuration
#-------------------------------------------------------------------------------
includeLibs.rgsmoothgallery = typo3conf/ext/rgsmoothgallery/Classes/Rendering/ConfigurationRendering.php

tt_content.image.20 {
	# Add the JS configuration
	#imageStdWrap.stdWrap.append = USER
	#imageStdWrap.stdWrap.append {
	#	stdWrap.if.isTrue.field = tx_rgsmoothgallery_rgsg
	#	userFunc = Tx_Rgsmoothgallery_Rendering_ConfigurationRendering->user_renderConfiguration
	#}

	# Render just the image
	rendering.rgsmoothgallerycaption {
		allStdWrap.dataWrap = <div class="csc-textpic-imagewrap" data-csc-images="{register:imageCount}" style="width:{register:rowWidthPlusTextMargin}px;"> <div class="flexslider" id="slideshow"><ul class="slides">|</ul></div> </div>
		singleStdWrap {
			wrap = <li>|###CAPTION###</li>
		}

		caption {
			required = 1
			wrap = <p class="flex-caption">|</p>
		}
	}

	renderMethod.stdWrap {
		override = rgsmoothgallerycaption
		override.if.isTrue.field = tx_rgsmoothgallery_rgsg
	}
}

