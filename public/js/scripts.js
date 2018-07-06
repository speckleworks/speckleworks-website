( function( ) {
  document.getElementById( "menubutton" ).onclick = function( ) {
    document.getElementById( "mobilemenu" ).classList.toggle( 'visible' );
  }

  document.getElementById( "menubuttonclose" ).onclick = function( ) {
    document.getElementById( "mobilemenu" ).classList.toggle( 'visible' );
  }

  let tocWidth = null
  let nav = document.getElementById( 'toc' );
  window.onscroll = ( ) => {
    if( !nav ) return
    if( window.pageYOffset < window.innerHeight * 0.8 ) {
      tocWidth = nav.offsetWidth
    }
    if ( window.pageYOffset > window.innerHeight * 0.8 & ( ( window.pageYOffset + 200) < document.body.scrollHeight - window.innerHeight ) ) {
      nav.classList.add( "sticky" );
      nav.style.width = tocWidth
    } else {
      nav.classList.remove( "sticky" );
    }
  }
} )( );