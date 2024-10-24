
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_OPENAI_API_KEY: string;
	export const GJS_DEBUG_TOPICS: string;
	export const LESSOPEN: string;
	export const CONDA_PROMPT_MODIFIER: string;
	export const USER: string;
	export const LC_TIME: string;
	export const npm_config_user_agent: string;
	export const GIO_MODULE_DIR: string;
	export const XDG_SESSION_TYPE: string;
	export const GIT_ASKPASS: string;
	export const GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
	export const npm_config_user: string;
	export const npm_node_execpath: string;
	export const GDK_BACKEND_VSCODE_SNAP_ORIG: string;
	export const SHLVL: string;
	export const npm_config_noproxy: string;
	export const HOME: string;
	export const CHROME_DESKTOP: string;
	export const CONDA_SHLVL: string;
	export const LOCPATH_VSCODE_SNAP_ORIG: string;
	export const TERM_PROGRAM_VERSION: string;
	export const DESKTOP_SESSION: string;
	export const GTK_PATH: string;
	export const NVM_BIN: string;
	export const npm_package_json: string;
	export const NVM_INC: string;
	export const GTK_IM_MODULE_FILE: string;
	export const GIO_LAUNCHED_DESKTOP_FILE: string;
	export const GNOME_SHELL_SESSION_MODE: string;
	export const GTK_MODULES: string;
	export const GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const LC_MONETARY: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const MANAGERPID: string;
	export const npm_config_userconfig: string;
	export const npm_config_local_prefix: string;
	export const SYSTEMD_EXEC_PID: string;
	export const DBUS_SESSION_BUS_ADDRESS: string;
	export const COLORTERM: string;
	export const _CE_M: string;
	export const GIO_LAUNCHED_DESKTOP_FILE_PID: string;
	export const COLOR: string;
	export const NVM_DIR: string;
	export const LOGNAME: string;
	export const JOURNAL_STREAM: string;
	export const _: string;
	export const npm_config_prefix: string;
	export const npm_config_npm_version: string;
	export const XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
	export const XDG_SESSION_CLASS: string;
	export const XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
	export const USERNAME: string;
	export const TERM: string;
	export const npm_config_cache: string;
	export const GNOME_DESKTOP_SESSION_ID: string;
	export const _CE_CONDA: string;
	export const WINDOWPATH: string;
	export const npm_config_node_gyp: string;
	export const PATH: string;
	export const SESSION_MANAGER: string;
	export const GTK_EXE_PREFIX: string;
	export const INVOCATION_ID: string;
	export const PAPERSIZE: string;
	export const NODE: string;
	export const npm_package_name: string;
	export const XDG_MENU_PREFIX: string;
	export const LC_ADDRESS: string;
	export const BAMF_DESKTOP_FILE_HINT: string;
	export const XDG_RUNTIME_DIR: string;
	export const GDK_BACKEND: string;
	export const DISPLAY: string;
	export const LOCPATH: string;
	export const LANG: string;
	export const XDG_CURRENT_DESKTOP: string;
	export const LC_TELEPHONE: string;
	export const GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
	export const XMODIFIERS: string;
	export const XDG_SESSION_DESKTOP: string;
	export const XAUTHORITY: string;
	export const LS_COLORS: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const TERM_PROGRAM: string;
	export const npm_lifecycle_script: string;
	export const SSH_AGENT_LAUNCHER: string;
	export const SSH_AUTH_SOCK: string;
	export const GSETTINGS_SCHEMA_DIR: string;
	export const CONDA_PYTHON_EXE: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const SHELL: string;
	export const LC_NAME: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const QT_ACCESSIBILITY: string;
	export const GDMSESSION: string;
	export const npm_config_unsafe_perm: string;
	export const LESSCLOSE: string;
	export const GTK_PATH_VSCODE_SNAP_ORIG: string;
	export const CONDA_DEFAULT_ENV: string;
	export const GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
	export const LC_MEASUREMENT: string;
	export const GPG_AGENT_INFO: string;
	export const GJS_DEBUG_OUTPUT: string;
	export const LC_IDENTIFICATION: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const QT_IM_MODULE: string;
	export const npm_config_globalconfig: string;
	export const npm_config_init_module: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const XDG_CONFIG_DIRS: string;
	export const CONDA_EXE: string;
	export const NVM_CD_FLAGS: string;
	export const XDG_DATA_DIRS: string;
	export const npm_config_global_prefix: string;
	export const LC_NUMERIC: string;
	export const npm_command: string;
	export const CONDA_PREFIX: string;
	export const LC_PAPER: string;
	export const INIT_CWD: string;
	export const EDITOR: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_OPENAI_API_KEY: string;
		GJS_DEBUG_TOPICS: string;
		LESSOPEN: string;
		CONDA_PROMPT_MODIFIER: string;
		USER: string;
		LC_TIME: string;
		npm_config_user_agent: string;
		GIO_MODULE_DIR: string;
		XDG_SESSION_TYPE: string;
		GIT_ASKPASS: string;
		GTK_EXE_PREFIX_VSCODE_SNAP_ORIG: string;
		npm_config_user: string;
		npm_node_execpath: string;
		GDK_BACKEND_VSCODE_SNAP_ORIG: string;
		SHLVL: string;
		npm_config_noproxy: string;
		HOME: string;
		CHROME_DESKTOP: string;
		CONDA_SHLVL: string;
		LOCPATH_VSCODE_SNAP_ORIG: string;
		TERM_PROGRAM_VERSION: string;
		DESKTOP_SESSION: string;
		GTK_PATH: string;
		NVM_BIN: string;
		npm_package_json: string;
		NVM_INC: string;
		GTK_IM_MODULE_FILE: string;
		GIO_LAUNCHED_DESKTOP_FILE: string;
		GNOME_SHELL_SESSION_MODE: string;
		GTK_MODULES: string;
		GSETTINGS_SCHEMA_DIR_VSCODE_SNAP_ORIG: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		LC_MONETARY: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		MANAGERPID: string;
		npm_config_userconfig: string;
		npm_config_local_prefix: string;
		SYSTEMD_EXEC_PID: string;
		DBUS_SESSION_BUS_ADDRESS: string;
		COLORTERM: string;
		_CE_M: string;
		GIO_LAUNCHED_DESKTOP_FILE_PID: string;
		COLOR: string;
		NVM_DIR: string;
		LOGNAME: string;
		JOURNAL_STREAM: string;
		_: string;
		npm_config_prefix: string;
		npm_config_npm_version: string;
		XDG_CONFIG_DIRS_VSCODE_SNAP_ORIG: string;
		XDG_SESSION_CLASS: string;
		XDG_DATA_DIRS_VSCODE_SNAP_ORIG: string;
		USERNAME: string;
		TERM: string;
		npm_config_cache: string;
		GNOME_DESKTOP_SESSION_ID: string;
		_CE_CONDA: string;
		WINDOWPATH: string;
		npm_config_node_gyp: string;
		PATH: string;
		SESSION_MANAGER: string;
		GTK_EXE_PREFIX: string;
		INVOCATION_ID: string;
		PAPERSIZE: string;
		NODE: string;
		npm_package_name: string;
		XDG_MENU_PREFIX: string;
		LC_ADDRESS: string;
		BAMF_DESKTOP_FILE_HINT: string;
		XDG_RUNTIME_DIR: string;
		GDK_BACKEND: string;
		DISPLAY: string;
		LOCPATH: string;
		LANG: string;
		XDG_CURRENT_DESKTOP: string;
		LC_TELEPHONE: string;
		GIO_MODULE_DIR_VSCODE_SNAP_ORIG: string;
		XMODIFIERS: string;
		XDG_SESSION_DESKTOP: string;
		XAUTHORITY: string;
		LS_COLORS: string;
		VSCODE_GIT_IPC_HANDLE: string;
		TERM_PROGRAM: string;
		npm_lifecycle_script: string;
		SSH_AGENT_LAUNCHER: string;
		SSH_AUTH_SOCK: string;
		GSETTINGS_SCHEMA_DIR: string;
		CONDA_PYTHON_EXE: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		SHELL: string;
		LC_NAME: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		QT_ACCESSIBILITY: string;
		GDMSESSION: string;
		npm_config_unsafe_perm: string;
		LESSCLOSE: string;
		GTK_PATH_VSCODE_SNAP_ORIG: string;
		CONDA_DEFAULT_ENV: string;
		GTK_IM_MODULE_FILE_VSCODE_SNAP_ORIG: string;
		LC_MEASUREMENT: string;
		GPG_AGENT_INFO: string;
		GJS_DEBUG_OUTPUT: string;
		LC_IDENTIFICATION: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		QT_IM_MODULE: string;
		npm_config_globalconfig: string;
		npm_config_init_module: string;
		PWD: string;
		npm_execpath: string;
		XDG_CONFIG_DIRS: string;
		CONDA_EXE: string;
		NVM_CD_FLAGS: string;
		XDG_DATA_DIRS: string;
		npm_config_global_prefix: string;
		LC_NUMERIC: string;
		npm_command: string;
		CONDA_PREFIX: string;
		LC_PAPER: string;
		INIT_CWD: string;
		EDITOR: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
