exports.id = 664;
exports.ids = [664];
exports.modules = {

/***/ 729:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addBasePath = addBasePath;

var _addPathPrefix = __webpack_require__(1751);

var _normalizeTrailingSlash = __webpack_require__(4979);

const basePath =  false || '';

function addBasePath(path, required) {
  if (false) {}

  return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 1630:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addLocale = void 0;

var _normalizeTrailingSlash = __webpack_require__(4979);

const addLocale = (path, ...args) => {
  if (false) {}

  return path;
};

exports.addLocale = addLocale;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6426:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.detectDomainLocale = void 0;

const detectDomainLocale = (...args) => {
  if (false) {}
};

exports.detectDomainLocale = detectDomainLocale;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 5235:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ''));

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6647:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hasBasePath = hasBasePath;

var _pathHasPrefix = __webpack_require__(4567);

const basePath =  false || '';

function hasBasePath(path) {
  return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 7913:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(6689));

var _router = __webpack_require__(2199);

var _addLocale = __webpack_require__(1630);

var _routerContext = __webpack_require__(4964);

var _appRouterContext = __webpack_require__(3280);

var _useIntersection = __webpack_require__(7215);

var _getDomainLocale = __webpack_require__(5235);

var _addBasePath = __webpack_require__(729);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
} // @ts-ignore useTransition exist


const hasUseTransition = typeof _react.default.useTransition !== 'undefined';
const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale, startTransition) {
  const {
    nodeName
  } = e.currentTarget; // anchors inside an svg have a lowercase nodeName

  const isAnchorNodeName = nodeName.toUpperCase() === 'A';

  if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser???s default behavior
    return;
  }

  e.preventDefault();

  const navigate = () => {
    // replace state instead of push if prop is present
    router[replace ? 'replace' : 'push'](href, as, {
      shallow,
      locale,
      scroll
    });
  };

  if (startTransition) {
    startTransition(navigate);
  } else {
    navigate();
  }
}

const Link = /*#__PURE__*/_react.default.forwardRef(function LinkComponent(props, forwardedRef) {
  if (false) {}

  let children;

  const {
    href: hrefProp,
    as: asProp,
    children: childrenProp,
    prefetch: prefetchProp,
    passHref,
    replace,
    shallow,
    scroll,
    locale,
    onClick,
    onMouseEnter,
    legacyBehavior = Boolean(false) !== true
  } = props,
        restProps = _objectWithoutProperties(props, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "legacyBehavior"]);

  children = childrenProp;

  if (legacyBehavior && typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  }

  const p = prefetchProp !== false;
  const [,
  /* isPending */
  startTransition] = hasUseTransition ? // There is no difference between renders in this case, only between using React 18 vs 17.
  // @ts-ignore useTransition exists
  // eslint-disable-next-line react-hooks/rules-of-hooks
  _react.default.useTransition() : [];

  let router = _react.default.useContext(_routerContext.RouterContext);

  const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);

  if (appRouter) {
    router = appRouter;
  }

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
    return {
      href: resolvedHref,
      as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
    };
  }, [router, hrefProp, asProp]);

  const previousHref = _react.default.useRef(href);

  const previousAs = _react.default.useRef(as); // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (legacyBehavior) {
    if (false) {} else {
      child = _react.default.Children.only(children);
    }
  }

  const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
  const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    // Before the link getting observed, check if visible state need to be reset
    if (previousAs.current !== as || previousHref.current !== href) {
      resetVisible();
      previousAs.current = as;
      previousHref.current = href;
    }

    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [as, childRef, href, resetVisible, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (false) {}

      if (!legacyBehavior && typeof onClick === 'function') {
        onClick(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale, appRouter ? startTransition : undefined);
      }
    },
    onMouseEnter: e => {
      if (!legacyBehavior && typeof onMouseEnter === 'function') {
        onMouseEnter(e);
      }

      if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      if ((0, _router).isLocalURL(href)) {
        prefetch(router, href, as, {
          priority: true
        });
      }
    }
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user

  if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
    childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return legacyBehavior ? /*#__PURE__*/_react.default.cloneElement(child, childProps) : /*#__PURE__*/_react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});

var _default = Link;
exports["default"] = _default;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 4979:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.normalizePathTrailingSlash = void 0;

var _removeTrailingSlash = __webpack_require__(3297);

var _parsePath = __webpack_require__(8854);

const normalizePathTrailingSlash = path => {
  if (!path.startsWith('/')) {
    return path;
  }

  const {
    pathname,
    query,
    hash
  } = (0, _parsePath).parsePath(path);

  if (false) {}

  return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};

exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 7524:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeBasePath = removeBasePath;

var _hasBasePath = __webpack_require__(6647);

const basePath =  false || '';

function removeBasePath(path) {
  if (false) {}

  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 4475:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removeLocale = removeLocale;

var _parsePath = __webpack_require__(8854);

function removeLocale(path, locale) {
  if (false) {}

  return path;
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 6498:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));

var _trustedTypes = __webpack_require__(5074);

var _requestIdleCallback = __webpack_require__(8065);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator() // eslint-disable-next-line no-sequences
  .then(value => (resolver(value), value)).catch(err => {
    map.delete(key);
    throw err;
  }) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;

    if (document.querySelector(selector)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (false) {}

    if (true) {
      (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
        if (!cancelled) {
          reject(err);
        }
      }, ms));
    }
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')).map(v => (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    // With HMR we might need to "reload" scripts when they are
    // disposed and readded. Executing scripts twice has no functional
    // differences
    if (true) {
      let prom = loadedScripts.get(src.toString());

      if (prom) {
        return prom;
      } // Skip executing script if it's already in the DOM:


      if (document.querySelector(`script[src^="${src}"]`)) {
        return Promise.resolve();
      }

      loadedScripts.set(src.toString(), prom = appendScript(src));
      return prom;
    } else {}
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      (execute ? Promise.resolve().then(() => execute()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })) : Promise.resolve(undefined)).then(input => {
        const old = entrypoints.get(route);

        if (old && 'resolve' in old) {
          if (input) {
            entrypoints.set(route, input);
            old.resolve(input);
          }
        } else {
          if (input) {
            entrypoints.set(route, input);
          } else {
            entrypoints.delete(route);
          } // when this entrypoint has been resolved before
          // the route is outdated and we want to invalidate
          // this cache entry


          routes.delete(route);
        }
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        let devBuildPromiseResolve;

        if (false) {}

        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        }).finally(() => {
          return devBuildPromiseResolve === null || devBuildPromiseResolve === void 0 ? void 0 : devBuildPromiseResolve();
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script.toString(), 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 5074:
/***/ ((module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */

let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */

function getPolicy() {
  if (typeof policy === 'undefined' && false) { var ref; }

  return policy;
}

function __unsafeCreateTrustedScriptURL(url) {
  var ref;
  return ((ref = getPolicy()) === null || ref === void 0 ? void 0 : ref.createScriptURL(url)) || url;
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 7215:
/***/ ((module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(6689);

var _requestIdleCallback = __webpack_require__(8065);

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootRef,
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const [root, setRoot] = (0, _react).useState(rootRef ? rootRef.current : null);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        root,
        rootMargin
      });
    }
  }, [isDisabled, root, rootMargin, visible]);
  const resetVisible = (0, _react).useCallback(() => {
    setVisible(false);
  }, []);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  (0, _react).useEffect(() => {
    if (rootRef) setRoot(rootRef.current);
  }, [rootRef]);
  return [setRef, visible, resetVisible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
      let index = idList.findIndex(obj => obj.root === id.root && obj.margin === id.margin);

      if (index > -1) {
        idList.splice(index, 1);
      }
    }
  };
}

const observers = new Map();
const idList = [];

function createObserver(options) {
  const id = {
    root: options.root || null,
    margin: options.rootMargin || ''
  };
  let existing = idList.find(obj => obj.root === id.root && obj.margin === id.margin);
  let instance;

  if (existing) {
    instance = observers.get(existing);
  } else {
    instance = observers.get(id);
    idList.push(id);
  }

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
  Object.defineProperty(exports.default, '__esModule', {
    value: true
  });
  Object.assign(exports.default, exports);
  module.exports = exports.default;
}

/***/ }),

/***/ 2199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;

var _normalizeTrailingSlash = __webpack_require__(4979);

var _removeTrailingSlash = __webpack_require__(3297);

var _routeLoader = __webpack_require__(6498);

var _script = __webpack_require__(7829);

var _isError = _interopRequireWildcard(__webpack_require__(676));

var _denormalizePagePath = __webpack_require__(4406);

var _normalizeLocalePath = __webpack_require__(4014);

var _mitt = _interopRequireDefault(__webpack_require__(8020));

var _utils = __webpack_require__(9232);

var _isDynamic = __webpack_require__(1428);

var _parseRelativeUrl = __webpack_require__(1292);

var _querystring = __webpack_require__(979);

var _resolveRewrites = _interopRequireDefault(__webpack_require__(6052));

var _routeMatcher = __webpack_require__(4226);

var _routeRegex = __webpack_require__(5052);

var _formatUrl = __webpack_require__(3938);

var _detectDomainLocale = __webpack_require__(6426);

var _parsePath = __webpack_require__(8854);

var _addLocale = __webpack_require__(1630);

var _removeLocale = __webpack_require__(4475);

var _removeBasePath = __webpack_require__(7524);

var _addBasePath = __webpack_require__(729);

var _hasBasePath = __webpack_require__(6647);

var _getNextPathnameInfo = __webpack_require__(5789);

var _formatNextPathnameInfo = __webpack_require__(299);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (!(0, _utils).isAbsoluteUrl(url)) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omit(object, keys) {
  const omitted = {};
  Object.keys(object).forEach(key => {
    if (!keys.includes(key)) {
      omitted[key] = object[key];
    }
  });
  return omitted;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _formatUrl).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _formatUrl).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omit(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_1) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}

const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts, options) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won???t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin',
    method: options.method || 'GET',
    headers: Object.assign({}, options.headers, {
      'x-nextjs-data': '1'
    })
  }).then(response => {
    return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
  });
}

const backgroundCache = {};

function fetchNextData({
  dataHref,
  inflightCache,
  isPrefetch,
  hasMiddleware,
  isServerRender,
  parseJSON,
  persistCache,
  isBackground
}) {
  const {
    href: cacheKey
  } = new URL(dataHref, window.location.href);
  var ref1;

  const getData = params => {
    return fetchRetry(dataHref, isServerRender ? 3 : 1, {
      headers: isPrefetch ? {
        purpose: 'prefetch'
      } : {},
      method: (ref1 = params === null || params === void 0 ? void 0 : params.method) !== null && ref1 !== void 0 ? ref1 : 'GET'
    }).then(response => {
      if (response.ok && (params === null || params === void 0 ? void 0 : params.method) === 'HEAD') {
        return {
          dataHref,
          response,
          text: '',
          json: {}
        };
      }

      return response.text().then(text => {
        if (!response.ok) {
          /**
          * When the data response is a redirect because of a middleware
          * we do not consider it an error. The headers must bring the
          * mapped location.
          * TODO: Change the status code in the handler.
          */
          if (hasMiddleware && [301, 302, 307, 308].includes(response.status)) {
            return {
              dataHref,
              response,
              text,
              json: {}
            };
          }

          if (response.status === 404) {
            var ref;

            if ((ref = tryToParseAsJSON(text)) === null || ref === void 0 ? void 0 : ref.notFound) {
              return {
                dataHref,
                json: {
                  notFound: SSG_DATA_NOT_FOUND
                },
                response,
                text
              };
            }
            /**
            * If there is a 404 that is not for SSG we used to fail but if
            * there is a middleware we must respond with an empty object.
            * For now we will return the data when there is a middleware.
            * TODO: Update the server to success on these requests.
            */


            if (hasMiddleware) {
              return {
                dataHref,
                response,
                text,
                json: {}
              };
            }
          }

          const error = new Error(`Failed to load static props`);
          /**
          * We should only trigger a server-side transition if this was
          * caused on a client-side transition. Otherwise, we'd get into
          * an infinite loop.
          */

          if (!isServerRender) {
            (0, _routeLoader).markAssetError(error);
          }

          throw error;
        }

        return {
          dataHref,
          json: parseJSON ? tryToParseAsJSON(text) : {},
          response,
          text
        };
      }).then(data => {
        if (!persistCache || false || data.response.headers.get('x-middleware-cache') === 'no-cache') {
          delete inflightCache[cacheKey];
        }

        return data;
      });
    }).catch(err => {
      delete inflightCache[cacheKey];
      throw err;
    });
  };

  if (inflightCache[cacheKey] !== undefined) {
    return inflightCache[cacheKey];
  }

  return inflightCache[cacheKey] = getData(isBackground ? {
    method: 'HEAD'
  } : {});
}

function tryToParseAsJSON(text) {
  try {
    return JSON.parse(text);
  } catch (error) {
    return {};
  }
}

function createKey() {
  return Math.random().toString(36).slice(2, 10);
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview,
    isRsc
  }) {
    // Server Data Cache
    this.sdc = {};
    this.isFirstPopStateEvent = true;
    this._key = createKey();

    this.onPopState = e => {
      const {
        isFirstPopStateEvent
      } = this;
      this.isFirstPopStateEvent = false;
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _formatUrl).formatWithValidation({
          pathname: (0, _addBasePath).addBasePath(pathname),
          query
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      } // Safari fires popstateevent when reopening the browser.


      if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        key
      } = state;

      if (false) {}

      this._key = key;
      const {
        pathname
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname === (0, _addBasePath).addBasePath(this.pathname)) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP,
        __N_RSC: !!isRsc
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.basePath =  false || '';
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isLocaleDomain = false;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);

    if (false) {}

    this.state = {
      route,
      pathname: pathname1,
      query: query1,
      asPath: autoExportDynamic ? pathname1 : as1,
      isPreview: !!isPreview,
      locale:  false ? 0 : undefined,
      isFallback
    };
    this._initialMatchesMiddlewarePromise = Promise.resolve(false);

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = options._h || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;

    const nextState = _objectSpread({}, this.state); // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = nextState.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false,
      scroll = true
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== nextState.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      nextState.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, _objectSpread(_objectSpread({}, options), {}, {
        scroll: false
      }));

      if (scroll) {
        this.scrollToHash(cleanedAs);
      }

      try {
        await this.set(nextState, this.components[nextState.route], null);
      } catch (err) {
        if ((0, _isError).default(err) && err.cancelled) {
          Router.events.emit('routeChangeError', err, cleanedAs, routeProps);
        }

        throw err;
      }

      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      [pages, {
        __rewrites: rewrites
      }] = await Promise.all([this.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest(), this.pageLoader.getMiddlewareList()]);
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname; // we don't attempt resolve asPath when we need to execute
    // middleware as the resolving will occur server-side

    const isMiddlewareMatch = !options.shallow && (await matchesMiddleware({
      asPath: as,
      locale: nextState.locale,
      router: this
    }));

    if (!isMiddlewareMatch && shouldResolveHref && pathname !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          parsed.pathname = (0, _addBasePath).addBasePath(pathname);
          url = (0, _formatUrl).formatWithValidation(parsed);
        }
      }
    }

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
    let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);

    if (!isMiddlewareMatch && (0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omit(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref2, ref3;
      let routeInfo = await this.getRouteInfo({
        route,
        pathname,
        query,
        as,
        resolvedAs,
        routeProps,
        locale: nextState.locale,
        isPreview: nextState.isPreview,
        hasMiddleware: isMiddlewareMatch
      });

      if ('route' in routeInfo && isMiddlewareMatch) {
        pathname = routeInfo.route || route;
        route = pathname;
        query = Object.assign({}, routeInfo.query || {}, query);

        if ((0, _isDynamic).isDynamicRoute(pathname)) {
          const prefixedAs = routeInfo.resolvedAs || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, nextState.locale), true);
          let rewriteAs = prefixedAs;

          if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
          }

          if (false) {}

          const routeRegex = (0, _routeRegex).getRouteRegex(pathname);
          const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(rewriteAs);

          if (routeMatch) {
            Object.assign(query, routeMatch);
          }
        }
      } // If the routeInfo brings a redirect we simply apply it.


      if ('type' in routeInfo) {
        if (routeInfo.type === 'redirect-internal') {
          return this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
        } else {
          window.location.href = routeInfo.destination;
          return new Promise(() => {});
        }
      }

      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      const component = routeInfo.Component;

      if (component && component.unstable_scriptLoader) {
        const scripts = [].concat(component.unstable_scriptLoader());
        scripts.forEach(script => {
          (0, _script).handleClientScriptLoad(script.props);
        });
      } // handle redirect on client-transition


      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          // Use the destination from redirect without adding locale
          options.locale = false;
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        nextState.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo({
            route: notFoundRoute,
            pathname: notFoundRoute,
            query,
            as,
            resolvedAs,
            routeProps: {
              shallow: false
            },
            locale: nextState.locale,
            isPreview: nextState.isPreview
          });

          if ('type' in routeInfo) {
            throw new Error(`Unexpected middleware effect on /404`);
          }
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (options._h && pathname === '/_error' && ((ref2 = self.__NEXT_DATA__.props) === null || ref2 === void 0 ? void 0 : (ref3 = ref2.pageProps) === null || ref3 === void 0 ? void 0 : ref3.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      var _route; // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) !== null && _route !== void 0 ? _route : route);

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(_objectSpread(_objectSpread({}, nextState), {}, {
        route,
        pathname,
        query,
        asPath: cleanedAs,
        isFallback: false
      }), routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps); // A hash mark # is the optional last part of a URL

      const hashRegex = /#.+$/;

      if (shouldScroll && hashRegex.test(as)) {
        this.scrollToHash(as);
      }

      return true;
    } catch (err1) {
      if ((0, _isError).default(err1) && err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        key: this._key = method !== 'pushState' ? this._key : createKey()
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ''), pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo({
    route: requestedRoute,
    pathname,
    query,
    as,
    resolvedAs,
    routeProps,
    locale,
    hasMiddleware,
    isPreview
  }) {
    /**
    * This `route` binding can change if there's a rewrite
    * so we keep a reference to the original requested route
    * so we can store the cache for it and avoid re-requesting every time
    * for shallow routing purposes.
    */
    let route = requestedRoute;

    try {
      var ref, ref4, ref5;
      let existingInfo = this.components[route];

      if (!hasMiddleware && routeProps.shallow && existingInfo && this.route === route) {
        return existingInfo;
      }

      let cachedRouteInfo = existingInfo && !('initial' in existingInfo) && true ? existingInfo : undefined;
      const fetchNextDataParams = {
        dataHref: this.pageLoader.getDataHref({
          href: (0, _formatUrl).formatWithValidation({
            pathname,
            query
          }),
          skipInterpolation: true,
          asPath: resolvedAs,
          locale
        }),
        hasMiddleware: true,
        isServerRender: this.isSsr,
        parseJSON: true,
        inflightCache: this.sdc,
        persistCache: !isPreview,
        isPrefetch: false
      };
      const data = await withMiddlewareEffects({
        fetchData: () => fetchNextData(fetchNextDataParams),
        asPath: resolvedAs,
        locale: locale,
        router: this
      });

      if ((data === null || data === void 0 ? void 0 : (ref = data.effect) === null || ref === void 0 ? void 0 : ref.type) === 'redirect-internal' || (data === null || data === void 0 ? void 0 : (ref4 = data.effect) === null || ref4 === void 0 ? void 0 : ref4.type) === 'redirect-external') {
        return data.effect;
      }

      if ((data === null || data === void 0 ? void 0 : (ref5 = data.effect) === null || ref5 === void 0 ? void 0 : ref5.type) === 'rewrite') {
        route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
        pathname = data.effect.resolvedHref;
        query = _objectSpread(_objectSpread({}, query), data.effect.parsedAs.query);
        resolvedAs = data.effect.parsedAs.pathname; // Check again the cache with the new destination.

        existingInfo = this.components[route];

        if (routeProps.shallow && existingInfo && this.route === route && !hasMiddleware) {
          // If we have a match with the current route due to rewrite,
          // we can copy the existing information to the rewritten one.
          // Then, we return the information along with the matched route.
          this.components[requestedRoute] = _objectSpread(_objectSpread({}, existingInfo), {}, {
            route
          });
          return _objectSpread(_objectSpread({}, existingInfo), {}, {
            route
          });
        }

        cachedRouteInfo = existingInfo && !('initial' in existingInfo) && true ? existingInfo : undefined;
      }

      const routeInfo = cachedRouteInfo || (await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP,
        __N_RSC: !!res.mod.__next_rsc__
      })));

      if (false) {}
      /**
      * For server components, non-SSR pages will have statically optimized
      * flight data in a production build. So only development and SSR pages
      * will always have the real-time generated and streamed flight data.
      */


      const useStreamedFlightData = routeInfo.__N_RSC && ( false || routeInfo.__N_SSP);
      const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP || routeInfo.__N_RSC;
      const {
        props
      } = await this._getData(async () => {
        if (shouldFetchData && !useStreamedFlightData) {
          const {
            json
          } = data || (await fetchNextData({
            dataHref: this.pageLoader.getDataHref({
              href: (0, _formatUrl).formatWithValidation({
                pathname,
                query
              }),
              asPath: resolvedAs,
              locale
            }),
            isServerRender: this.isSsr,
            parseJSON: true,
            inflightCache: this.sdc,
            persistCache: !isPreview,
            isPrefetch: false
          }));
          return {
            props: json
          };
        }

        return {
          headers: {},
          props: await this.getInitialProps(routeInfo.Component, // we provide AppTree later so this needs to be `any`
          {
            pathname,
            query,
            asPath: as,
            locale,
            locales: this.locales,
            defaultLocale: this.defaultLocale
          })
        };
      }); // Only bust the data cache for SSP routes although
      // middleware can skip cache per request with
      // x-middleware-cache: no-cache as well

      if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
        const cacheKey = new URL(fetchNextDataParams.dataHref, window.location.href).href;
        delete this.sdc[cacheKey];
      } // we kick off a HEAD request in the background
      // when a non-prefetch request is made to signal revalidation


      if (!this.isPreview && routeInfo.__N_SSG && true) {
        fetchNextData(Object.assign({}, fetchNextDataParams, {
          isBackground: true,
          persistCache: false,
          inflightCache: backgroundCache
        })).catch(() => {});
      }

      if (routeInfo.__N_RSC) {
        props.pageProps = Object.assign(props.pageProps, {
          __flight__: useStreamedFlightData ? (await this._getData(() => this._getFlightData((0, _formatUrl).formatWithValidation({
            query: _objectSpread(_objectSpread({}, query), {}, {
              __flight__: '1'
            }),
            pathname: (0, _isDynamic).isDynamicRoute(route) ? interpolateAs(pathname, (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs).pathname, query).result : pathname
          })))).data : props.__flight__
        });
      }

      routeInfo.props = props;
      routeInfo.route = route;
      routeInfo.query = query;
      routeInfo.resolvedAs = resolvedAs;
      this.components[route] = routeInfo; // If the route was rewritten in the process of fetching data,
      // we update the cache to allow hitting the same data for shallow requests.

      if (route !== requestedRoute) {
        this.components[requestedRoute] = _objectSpread(_objectSpread({}, routeInfo), {}, {
          route
        });
      }

      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
    }
  }

  set(state, data, resetScroll) {
    this.state = state;
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash = ''] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // Decode hash to make non-latin anchor works.


    const rawHash = decodeURIComponent(hash); // First we check if the element by id is found

    const idEl = document.getElementById(rawHash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(rawHash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname,
      query
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        parsed.pathname = pathname;
        url = (0, _formatUrl).formatWithValidation(parsed);
      }
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (false) {}

    const locale = typeof options.locale !== 'undefined' ? options.locale || undefined : this.locale;
    const data = await withMiddlewareEffects({
      fetchData: () => fetchNextData({
        dataHref: this.pageLoader.getDataHref({
          href: (0, _formatUrl).formatWithValidation({
            pathname,
            query
          }),
          skipInterpolation: true,
          asPath: resolvedAs,
          locale
        }),
        hasMiddleware: true,
        isServerRender: this.isSsr,
        parseJSON: true,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: true
      }),
      asPath: asPath,
      locale: locale,
      router: this
    });
    /**
    * If there was a rewrite we apply the effects of the rewrite on the
    * current parameters for the prefetch.
    */

    if ((data === null || data === void 0 ? void 0 : data.effect.type) === 'rewrite') {
      parsed.pathname = data.effect.resolvedHref;
      pathname = data.effect.resolvedHref;
      query = _objectSpread(_objectSpread({}, query), data.effect.parsedAs.query);
      resolvedAs = data.effect.parsedAs.pathname;
      url = (0, _formatUrl).formatWithValidation(parsed);
    }
    /**
    * If there is a redirect to an external destination then we don't have
    * to prefetch content as it will be unused.
    */


    if ((data === null || data === void 0 ? void 0 : data.effect.type) === 'redirect-external') {
      return;
    }

    const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? fetchNextData({
        dataHref: this.pageLoader.getDataHref({
          href: url,
          asPath: resolvedAs,
          locale: locale
        }),
        isServerRender: false,
        parseJSON: true,
        inflightCache: this.sdc,
        persistCache: !this.isPreview,
        isPrefetch: true
      }).then(() => false) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const handleCancelled = () => {
      if (cancelled) {
        const error = new Error(`Abort fetching component for route: "${route}"`);
        error.cancelled = true;
        throw error;
      }

      if (cancel === this.clc) {
        this.clc = null;
      }
    };

    try {
      const componentResult = await this.pageLoader.loadPage(route);
      handleCancelled();
      return componentResult;
    } catch (err) {
      handleCancelled();
      throw err;
    }
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getFlightData(dataHref) {
    // Do not cache RSC flight response since it's not a static resource
    return fetchNextData({
      dataHref,
      isServerRender: true,
      parseJSON: false,
      inflightCache: this.sdc,
      persistCache: false,
      isPrefetch: false
    }).then(({
      text
    }) => ({
      data: text
    }));
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  get route() {
    return this.state.route;
  }

  get pathname() {
    return this.state.pathname;
  }

  get query() {
    return this.state.query;
  }

  get asPath() {
    return this.state.asPath;
  }

  get locale() {
    return this.state.locale;
  }

  get isFallback() {
    return this.state.isFallback;
  }

  get isPreview() {
    return this.state.isPreview;
  }

}

exports["default"] = Router;
Router.events = (0, _mitt).default();

function matchesMiddleware(options) {
  return Promise.resolve(options.router.pageLoader.getMiddlewareList()).then(items => {
    const {
      pathname: asPathname
    } = (0, _parsePath).parsePath(options.asPath);
    const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
    return !!(items === null || items === void 0 ? void 0 : items.some(([regex, ssr]) => {
      return !ssr && new RegExp(regex).test((0, _addLocale).addLocale(cleanedAs, options.locale));
    }));
  });
}

function withMiddlewareEffects(options) {
  return matchesMiddleware(options).then(matches => {
    if (matches && options.fetchData) {
      return options.fetchData().then(data => getMiddlewareData(data.dataHref, data.response, options).then(effect => ({
        dataHref: data.dataHref,
        json: data.json,
        response: data.response,
        text: data.text,
        effect
      }))).catch(_err => {
        /**
        * TODO: Revisit this in the future.
        * For now we will not consider middleware data errors to be fatal.
        * maybe we should revisit in the future.
        */
        return null;
      });
    }

    return null;
  });
}

function getMiddlewareData(source, response, options) {
  const nextConfig = {
    basePath: options.router.basePath,
    i18n: {
      locales: options.router.locales
    },
    trailingSlash: Boolean(false)
  };
  const rewriteHeader = response.headers.get('x-nextjs-rewrite');
  let rewriteTarget = rewriteHeader || response.headers.get('x-nextjs-matched-path');
  const matchedPath = response.headers.get('x-matched-path');

  if (!rewriteTarget && !(matchedPath === null || matchedPath === void 0 ? void 0 : matchedPath.includes('__next_data_catchall'))) {
    rewriteTarget = matchedPath;
  }

  if (rewriteTarget) {
    if (rewriteTarget.startsWith('/')) {
      const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
      const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
        nextConfig,
        parseData: true
      });
      const fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
      return Promise.all([options.router.pageLoader.getPageList(), (0, _routeLoader).getClientBuildManifest()]).then(([pages, {
        __rewrites: rewrites
      }]) => {
        let as = parsedRewriteTarget.pathname;

        if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
          const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
            parseData: true
          });
          as = (0, _addBasePath).addBasePath(parsedSource.pathname);
          parsedRewriteTarget.pathname = as;
        }

        if (false) {}

        const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;

        if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
          const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
          Object.assign(parsedRewriteTarget.query, matches || {});
        }

        return {
          type: 'rewrite',
          parsedAs: parsedRewriteTarget,
          resolvedHref
        };
      });
    }

    const src = (0, _parsePath).parsePath(source);
    const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_objectSpread(_objectSpread({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
      nextConfig,
      parseData: true
    })), {}, {
      defaultLocale: options.router.defaultLocale,
      buildId: ''
    }));
    return Promise.resolve({
      type: 'redirect-external',
      destination: `${pathname}${src.query}${src.hash}`
    });
  }

  const redirectTarget = response.headers.get('x-nextjs-redirect');

  if (redirectTarget) {
    if (redirectTarget.startsWith('/')) {
      const src = (0, _parsePath).parsePath(redirectTarget);
      const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_objectSpread(_objectSpread({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
        nextConfig,
        parseData: true
      })), {}, {
        defaultLocale: options.router.defaultLocale,
        buildId: ''
      }));
      return Promise.resolve({
        type: 'redirect-internal',
        newAs: `${pathname}${src.query}${src.hash}`,
        newUrl: `${pathname}${src.query}${src.hash}`
      });
    }

    return Promise.resolve({
      type: 'redirect-external',
      destination: redirectTarget
    });
  }

  return Promise.resolve({
    type: 'next'
  });
}

/***/ }),

/***/ 1664:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(7913)


/***/ })

};
;