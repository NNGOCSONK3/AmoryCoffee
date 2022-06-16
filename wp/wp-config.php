<?php

//Begin Really Simple SSL session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple SSL
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'cxniycsu_wp501' );

/** Database username */
define( 'DB_USER', 'cxniycsu_wp501' );

/** Database password */
define( 'DB_PASSWORD', '9(16SOG6@p' );

/** Database hostname */
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
define( 'AUTH_KEY',         'pgwdu4zgjleabx66vp8lch0qcf24h3r0dxww56iqhutmapgzu6atpleymfs2c4ua' );
define( 'SECURE_AUTH_KEY',  'gi0lmj7gghy6qyrc4bbxhxdtgqmo2piipbxtvamtsbalwuyhkn761tvbqx6e8tjn' );
define( 'LOGGED_IN_KEY',    'jmhioorufpha6cjprdqalwkeeau5ygyrukycr8gc3cdbdeno3hho59kp7oehym4m' );
define( 'NONCE_KEY',        'wcil4ufalso9kyq9btp1evxsdmrbm8t8acdkk8oeoo4psn11wgsbihzvtnwkoakd' );
define( 'AUTH_SALT',        'jzjtguqxy1vfqaoiubjwwv1y9ujriuskmtammycfuntnpcl6cl3x8cjm8naf66hj' );
define( 'SECURE_AUTH_SALT', 'uiwmyuulmryldpnfoubbiaatzq5o44fx1lixxekv6nxotoaqtkpeonisrgh3ss2e' );
define( 'LOGGED_IN_SALT',   'aca9yoivkiqpzbgfwkj3oxdkh1gkxe91qhowceqfi11yegjvchzkzhgi1lcin1fb' );
define( 'NONCE_SALT',       'tl0a4jv0u6jevvndiwpmodybtua3dz3klbhs6gs3txtiizy6janhzwteieufmqyk' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpvb_';

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
