<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link http://wpdocs.osdn.jp/wp-config.php_%E3%81%AE%E7%B7%A8%E9%9B%86
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'forcedToConform-wp' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'root' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'root' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'localhost' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8mb4' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define('DB_COLLATE', '');

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'TAZr,,SYUFBV@ZjgBOI10 :zgUTRd+BZzw;wNtF_&f;&k8[c!3.Bf#E)c-.%MuIC' );
define( 'SECURE_AUTH_KEY',  '!}|J<gr5@l;Rw}r:d14!^T<c[!M<smYU@;!$XcD7}x..18 LVub_2Sz(|`{)5Q+U' );
define( 'LOGGED_IN_KEY',    '>aUkyg(**Q);h4=E(uGnQ;=6TxCk,#;eSl4V2ecLlFNB)T*q.g&GemIzF2ix9$F>' );
define( 'NONCE_KEY',        '}LTW0dCW?sC|q^9fdm+ZjU:gDV@jv8}HcR}._QVI{O%L#XvwfqPD$5aoKQy(SCSj' );
define( 'AUTH_SALT',        '%/UFAo>|ll&=;Fx~Nf|xb22kZ,|&N5/W-1;F%AK%8>nd?VCn~pA|KQE!]wlHu^Qa' );
define( 'SECURE_AUTH_SALT', ',r-+r0iH#>igd(tWSzG=g&esT&j E6KQ#)^v!i)(8N?$D>RiK`OKeDO6AccI_end' );
define( 'LOGGED_IN_SALT',   '=Pp(|S9{?VYH`Rk,j#Okg(,]61.=v?A$|Mk[_D 9.vfe^@z!%hXjto/V88A+j:3x' );
define( 'NONCE_SALT',       'Kd ;94*?BpVei_mPtBLcdyq_j+v,KJA@~B!!i;HC[8|*Jup/re`@vKKmsb,DI*nz' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数については Codex をご覧ください。
 *
 * @link http://wpdocs.osdn.jp/WordPress%E3%81%A7%E3%81%AE%E3%83%87%E3%83%90%E3%83%83%E3%82%B0
 */
define('WP_DEBUG', false);

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
