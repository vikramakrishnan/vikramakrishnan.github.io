( function( api ) {

	// Extends our custom "personalblogily" section.
	api.sectionConstructor['personalblogily'] = api.Section.extend( {

		// No events for this type of section.
		attachEvents: function () {},

		// Always make the section active.
		isContextuallyActive: function () {
			return true;
		}
	} );

} )( wp.customize );
