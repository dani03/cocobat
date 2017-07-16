jQuery(document).ready(function($) {
  $( '#pp-404page-admin-notice-1' ).on( 'click', '.notice-dismiss', function ( event ) {
    event.preventDefault();
		data = {
			action: 'pp_404page_dismiss_admin_notice',
			pp_404page_dismiss_admin_notice: pp_404page_remove.pp_404page_dismiss_admin_notice_number
		};
		$.post( ajaxurl, data );
		return false;
	});
});