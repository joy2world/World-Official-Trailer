<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'worldofficialtrailer' );

/** MySQL database username */
define( 'DB_USER', 'worldtrailer' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Ronjoyjeff131977' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'Z_oV+fZl%]fLW^s?K|TY*~ApA?@nMaDKbxvvnrA[LP9>1ZBO@8e;iyzdRMAdh YO' );
define( 'SECURE_AUTH_KEY',  'e9mjbFNXXSj-YAqH:=6J!u1DN*_[c^W0Du)q|.E }[Jsx?<HPQ,5*hWA~ls)C2g)' );
define( 'LOGGED_IN_KEY',    '4WGML9,~P+b.=2&#]6.7w.G{oI4(hF<K`aDSu>F-QVn!~YpA7GVT4OT@kW![.Dd@' );
define( 'NONCE_KEY',        '=`bZ;|mckaR0mw55ggw)QsJajG2*](?Nv_6#>wBcWQEN@!,7T:6eW(jkV_JJpI#{' );
define( 'AUTH_SALT',        '99~M)q?MknXw#G#m|-HQJey~$aSOI!>(JRSn4CdGK#J`+i)xQn_(y?lQFSz<7amt' );
define( 'SECURE_AUTH_SALT', 'm{hBLsn|F+zrs: VNRe}<nb,%0EV_O@Q3vSd^|b![a<+nA?6(%)4O4@JlO6V)UtG' );
define( 'LOGGED_IN_SALT',   '-O:~X0.H-jyIr=+P(Sb.k,G)?#q&{JQfp%5ru2|qP}b8gwvJ!s3W`KlWjh&ycy&V' );
define( 'NONCE_SALT',       '03BR<8jJ.onSjy+}V,]TMS-8fa>^KvG!mWWfbvm<.GMy<h0GT=2:41b$z~IKGR6l' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
