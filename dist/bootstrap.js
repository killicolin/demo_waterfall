/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"./node_modules/spectral_graph/spectral_graph_bg.wasm": function() {
/******/ 			return {
/******/ 				"./spectral_graph_bg.js": {
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_f851667af71bcfc6": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_error_f851667af71bcfc6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_abda76e883ba8a5f": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_new_abda76e883ba8a5f"]();
/******/ 					},
/******/ 					"__wbg_stack_658279fe44541cf6": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_stack_658279fe44541cf6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_get": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_number_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_e266f02eee43b570": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_instanceof_Window_e266f02eee43b570"](p0i32);
/******/ 					},
/******/ 					"__wbg_document_950215a728589a2d": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_document_950215a728589a2d"](p0i32);
/******/ 					},
/******/ 					"__wbg_navigator_b18e629f7f0b75fa": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_navigator_b18e629f7f0b75fa"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerWidth_7e9d12e05bcb598e": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_innerWidth_7e9d12e05bcb598e"](p0i32);
/******/ 					},
/******/ 					"__wbg_innerHeight_3ef25a30618357e0": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_innerHeight_3ef25a30618357e0"](p0i32);
/******/ 					},
/******/ 					"__wbg_devicePixelRatio_5f8f5cab76864090": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_devicePixelRatio_5f8f5cab76864090"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelAnimationFrame_d079cdb83bc43b26": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_cancelAnimationFrame_d079cdb83bc43b26"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_matchMedia_967e50e4289050fa": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_matchMedia_967e50e4289050fa"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_requestAnimationFrame_afe426b568f84138": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_requestAnimationFrame_afe426b568f84138"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_e6ae480a4b8df368": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_get_e6ae480a4b8df368"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_clearTimeout_b2b8af0f044e02e9": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_clearTimeout_b2b8af0f044e02e9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setTimeout_6609c9aa64f32bfc": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setTimeout_6609c9aa64f32bfc"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_fullscreenElement_65f14a4df7c25129": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_fullscreenElement_65f14a4df7c25129"](p0i32);
/******/ 					},
/******/ 					"__wbg_createElement_e2a0e21263eb5416": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createElement_e2a0e21263eb5416"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_exitFullscreen_36506b10bd87f8b8": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_exitFullscreen_36506b10bd87f8b8"](p0i32);
/******/ 					},
/******/ 					"__wbg_getElementById_eb93a47327bb5585": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getElementById_eb93a47327bb5585"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_querySelectorAll_608b5716e2a3baf0": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_querySelectorAll_608b5716e2a3baf0"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_x_0938e87a3ff14a2e": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_x_0938e87a3ff14a2e"](p0i32);
/******/ 					},
/******/ 					"__wbg_y_b881176a43492948": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_y_b881176a43492948"](p0i32);
/******/ 					},
/******/ 					"__wbg_setProperty_21e2e7868b86a93e": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setProperty_21e2e7868b86a93e"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_instanceof_GpuAdapter_6a21ec3028a6a633": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_instanceof_GpuAdapter_6a21ec3028a6a633"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestDevice_98a881f5f37cbc1b": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_requestDevice_98a881f5f37cbc1b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_submit_145accdc4854b69b": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_submit_145accdc4854b69b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_writeTexture_a747d2eb64753216": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_writeTexture_a747d2eb64753216"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_end_90bec30eeecaac54": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_end_90bec30eeecaac54"](p0i32);
/******/ 					},
/******/ 					"__wbg_setBindGroup_799966434e921168": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setBindGroup_799966434e921168"](p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32);
/******/ 					},
/******/ 					"__wbg_draw_da079c427d4e1307": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_draw_da079c427d4e1307"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_setPipeline_4b1f6ab51617f980": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setPipeline_4b1f6ab51617f980"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_deltaX_b7d127c94d6265c0": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_deltaX_b7d127c94d6265c0"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaY_b32fa858e16edcc0": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_deltaY_b32fa858e16edcc0"](p0i32);
/******/ 					},
/******/ 					"__wbg_deltaMode_11f7b19e64d9a515": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_deltaMode_11f7b19e64d9a515"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientX_35f23f953e04ec0e": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_clientX_35f23f953e04ec0e"](p0i32);
/******/ 					},
/******/ 					"__wbg_clientY_8104e462abc0b3ec": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_clientY_8104e462abc0b3ec"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetX_413d9f02022e72ad": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_offsetX_413d9f02022e72ad"](p0i32);
/******/ 					},
/******/ 					"__wbg_offsetY_488f80a0a9666028": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_offsetY_488f80a0a9666028"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_e1b8f1de1eb24d5d": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_ctrlKey_e1b8f1de1eb24d5d"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_fdd99b6df96e25c5": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_shiftKey_fdd99b6df96e25c5"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_d531a4d3704557cb": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_altKey_d531a4d3704557cb"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_934772989e28020c": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_metaKey_934772989e28020c"](p0i32);
/******/ 					},
/******/ 					"__wbg_button_a1c470d5e4c997f2": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_button_a1c470d5e4c997f2"](p0i32);
/******/ 					},
/******/ 					"__wbg_buttons_42a7b7de33d8e572": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_buttons_42a7b7de33d8e572"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementX_f4d07f6658c1e16f": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_movementX_f4d07f6658c1e16f"](p0i32);
/******/ 					},
/******/ 					"__wbg_movementY_30276c1f90aec4fa": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_movementY_30276c1f90aec4fa"](p0i32);
/******/ 					},
/******/ 					"__wbg_queue_6b0eedcf46d47cbd": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_queue_6b0eedcf46d47cbd"](p0i32);
/******/ 					},
/******/ 					"__wbg_createBindGroup_2a20ed419eb0c234": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createBindGroup_2a20ed419eb0c234"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBindGroupLayout_d8f7eb1e6a48042e": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createBindGroupLayout_d8f7eb1e6a48042e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createBuffer_7c429b6a1c19d86f": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createBuffer_7c429b6a1c19d86f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createCommandEncoder_16ef0a1822a74575": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createCommandEncoder_16ef0a1822a74575"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createComputePipeline_9d9c4c1e7c177a43": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createComputePipeline_9d9c4c1e7c177a43"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createPipelineLayout_651e444b8d7b374a": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createPipelineLayout_651e444b8d7b374a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createRenderPipeline_adf9ebf96b9eb9b4": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createRenderPipeline_adf9ebf96b9eb9b4"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createSampler_3246c59a5aeec1ce": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createSampler_3246c59a5aeec1ce"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createShaderModule_58ad41a3299a4bb9": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createShaderModule_58ad41a3299a4bb9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createTexture_ea9e43be4047490d": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createTexture_ea9e43be4047490d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createView_d0df6318b34e3b5d": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_createView_d0df6318b34e3b5d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_pointerId_d2caae4465ba386f": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_pointerId_d2caae4465ba386f"](p0i32);
/******/ 					},
/******/ 					"__wbg_pressure_352c13794490720b": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_pressure_352c13794490720b"](p0i32);
/******/ 					},
/******/ 					"__wbg_pointerType_df759fa0bd6634ed": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_pointerType_df759fa0bd6634ed"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getBoundingClientRect_aaa701cbcb448965": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getBoundingClientRect_aaa701cbcb448965"](p0i32);
/******/ 					},
/******/ 					"__wbg_requestFullscreen_4eee04b9090fa98a": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_requestFullscreen_4eee04b9090fa98a"](p0i32);
/******/ 					},
/******/ 					"__wbg_setAttribute_79c9562d32d05e66": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setAttribute_79c9562d32d05e66"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_setPointerCapture_5479dc0d082282b7": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setPointerCapture_5479dc0d082282b7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getMappedRange_33ceebd7bbe29781": function(p0i32,p1f64,p2f64) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getMappedRange_33ceebd7bbe29781"](p0i32,p1f64,p2f64);
/******/ 					},
/******/ 					"__wbg_mapAsync_10d0f6703ef03e7b": function(p0i32,p1i32,p2f64,p3f64) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_mapAsync_10d0f6703ef03e7b"](p0i32,p1i32,p2f64,p3f64);
/******/ 					},
/******/ 					"__wbg_unmap_ae21c65ca7ae9598": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_unmap_ae21c65ca7ae9598"](p0i32);
/******/ 					},
/******/ 					"__wbg_label_9a9e9fc564518aa6": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_label_9a9e9fc564518aa6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginComputePass_3a26c65b3bbaff3f": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_beginComputePass_3a26c65b3bbaff3f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_beginRenderPass_db57aa384a7aef06": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_beginRenderPass_db57aa384a7aef06"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_copyBufferToBuffer_dfab33ec8c9e760e": function(p0i32,p1i32,p2f64,p3i32,p4f64,p5f64) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_copyBufferToBuffer_dfab33ec8c9e760e"](p0i32,p1i32,p2f64,p3i32,p4f64,p5f64);
/******/ 					},
/******/ 					"__wbg_finish_72c07625138235ea": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_finish_72c07625138235ea"](p0i32);
/******/ 					},
/******/ 					"__wbg_finish_e43769cf456060ff": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_finish_e43769cf456060ff"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_matches_46e979ff3e4d0811": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_matches_46e979ff3e4d0811"](p0i32);
/******/ 					},
/******/ 					"__wbg_now_c644db5194be8437": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_now_c644db5194be8437"](p0i32);
/******/ 					},
/******/ 					"__wbg_style_2141664e428fef46": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_style_2141664e428fef46"](p0i32);
/******/ 					},
/******/ 					"__wbg_debug_8db2eed1bf6c1e2a": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_debug_8db2eed1bf6c1e2a"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_fe807da27c4a4ced": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_error_fe807da27c4a4ced"](p0i32);
/******/ 					},
/******/ 					"__wbg_error_2d344a50ccf38b3b": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_error_2d344a50ccf38b3b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_info_9e6db45ac337c3b5": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_info_9e6db45ac337c3b5"](p0i32);
/******/ 					},
/******/ 					"__wbg_log_7bb108d119bafbc1": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_log_7bb108d119bafbc1"](p0i32);
/******/ 					},
/******/ 					"__wbg_warn_e57696dbb3977030": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_warn_e57696dbb3977030"](p0i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_615d4590d38da1c9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_addEventListener_615d4590d38da1c9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_addEventListener_cf5b03cd29763277": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_addEventListener_cf5b03cd29763277"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_removeEventListener_343e3ea9fe4c8533": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_removeEventListener_343e3ea9fe4c8533"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_configure_2eba1e396591bdd7": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_configure_2eba1e396591bdd7"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getCurrentTexture_0f26ea6da8c0f77c": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getCurrentTexture_0f26ea6da8c0f77c"](p0i32);
/******/ 					},
/******/ 					"__wbg_getBindGroupLayout_7478e25935b9d2e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getBindGroupLayout_7478e25935b9d2e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_target_b629c177f9bee3da": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_target_b629c177f9bee3da"](p0i32);
/******/ 					},
/******/ 					"__wbg_cancelBubble_c9a8182589205d54": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_cancelBubble_c9a8182589205d54"](p0i32);
/******/ 					},
/******/ 					"__wbg_preventDefault_16b2170b12f56317": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_preventDefault_16b2170b12f56317"](p0i32);
/******/ 					},
/******/ 					"__wbg_stopPropagation_7647c9985222f9b0": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_stopPropagation_7647c9985222f9b0"](p0i32);
/******/ 					},
/******/ 					"__wbg_dispatchWorkgroups_44644514248ca896": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_dispatchWorkgroups_44644514248ca896"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_end_4f73dcb320797ca5": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_end_4f73dcb320797ca5"](p0i32);
/******/ 					},
/******/ 					"__wbg_setPipeline_c1c3fde5d44173c8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setPipeline_c1c3fde5d44173c8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setBindGroup_534bbf726e58dd0d": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setBindGroup_534bbf726e58dd0d"](p0i32,p1i32,p2i32,p3i32,p4i32,p5f64,p6i32);
/******/ 					},
/******/ 					"__wbg_width_a40e21a22129b197": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_width_a40e21a22129b197"](p0i32);
/******/ 					},
/******/ 					"__wbg_setwidth_81c62bc806e0a727": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setwidth_81c62bc806e0a727"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_height_98d51321254345a5": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_height_98d51321254345a5"](p0i32);
/******/ 					},
/******/ 					"__wbg_setheight_98cf0db22c40ef07": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_setheight_98cf0db22c40ef07"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getContext_3ae404b649cf9287": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getContext_3ae404b649cf9287"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_8187c9b59091f3ad": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_get_8187c9b59091f3ad"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_charCode_504e79c3e550d1bb": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_charCode_504e79c3e550d1bb"](p0i32);
/******/ 					},
/******/ 					"__wbg_keyCode_b33194be2ceec53b": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_keyCode_b33194be2ceec53b"](p0i32);
/******/ 					},
/******/ 					"__wbg_altKey_dff2a075455ac01b": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_altKey_dff2a075455ac01b"](p0i32);
/******/ 					},
/******/ 					"__wbg_ctrlKey_993b558f853d64ce": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_ctrlKey_993b558f853d64ce"](p0i32);
/******/ 					},
/******/ 					"__wbg_shiftKey_31e62e9d172b26f0": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_shiftKey_31e62e9d172b26f0"](p0i32);
/******/ 					},
/******/ 					"__wbg_metaKey_9f0f19692d0498bd": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_metaKey_9f0f19692d0498bd"](p0i32);
/******/ 					},
/******/ 					"__wbg_key_f0decac219aa904b": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_key_f0decac219aa904b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_code_aed21120de275a12": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_code_aed21120de275a12"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getModifierState_03b72700dbe33ad6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_getModifierState_03b72700dbe33ad6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_gpu_383beebfe7730ae8": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_gpu_383beebfe7730ae8"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_number_new": function(p0f64) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_number_new"](p0f64);
/******/ 					},
/******/ 					"__wbg_requestAdapter_1e9aee61dd467483": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_requestAdapter_1e9aee61dd467483"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_matches_7b5ad9e6bb56f1f3": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_matches_7b5ad9e6bb56f1f3"](p0i32);
/******/ 					},
/******/ 					"__wbg_addListener_dfc3f9e430149b14": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_addListener_dfc3f9e430149b14"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_removeListener_6f811d2fb59768b9": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_removeListener_6f811d2fb59768b9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_appendChild_b8199dc1655c852d": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_appendChild_b8199dc1655c852d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_b525de17f44a8943": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_new_b525de17f44a8943"]();
/******/ 					},
/******/ 					"__wbg_push_49c286f04dd3bf59": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_push_49c286f04dd3bf59"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_2b8b6bd7753c76ba": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_newnoargs_2b8b6bd7753c76ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_95d1ea488d03e4e8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_call_95d1ea488d03e4e8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_9495de66fdbe016b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_call_9495de66fdbe016b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_is_8f1618fe9a4fd388": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_is_8f1618fe9a4fd388"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_f9876326328f45ed": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_new_f9876326328f45ed"]();
/******/ 					},
/******/ 					"__wbg_new_9d3a9ce4282a18a8": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_new_9d3a9ce4282a18a8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_fd40f858d9db1a04": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_resolve_fd40f858d9db1a04"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_ec5db6d509eb475f": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_then_ec5db6d509eb475f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_f753623316e2873a": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_then_f753623316e2873a"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_globalThis_87cbb8506fecf3a9": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_globalThis_87cbb8506fecf3a9"]();
/******/ 					},
/******/ 					"__wbg_self_e7c1f827057f6584": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_self_e7c1f827057f6584"]();
/******/ 					},
/******/ 					"__wbg_window_a09ec664e14b1b81": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_window_a09ec664e14b1b81"]();
/******/ 					},
/******/ 					"__wbg_global_c85a9259e621f3db": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_global_c85a9259e621f3db"]();
/******/ 					},
/******/ 					"__wbg_new_537b7341ce90bb31": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_new_537b7341ce90bb31"](p0i32);
/******/ 					},
/******/ 					"__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_buffer_5f1fc856188c4b44": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_buffer_5f1fc856188c4b44"](p0i32);
/******/ 					},
/******/ 					"__wbg_length_27a2afe8ab42b09f": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_length_27a2afe8ab42b09f"](p0i32);
/******/ 					},
/******/ 					"__wbg_set_17499e8aa4003ebd": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_set_17499e8aa4003ebd"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_get_baf4855f9a986186": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_get_baf4855f9a986186"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_set_6aa458a4ebdb65cb": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_set_6aa458a4ebdb65cb"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbg_buffer_cf65c07de34b9a08": function(p0i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbg_buffer_cf65c07de34b9a08"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_memory": function() {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_memory"]();
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1451": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1451"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1453": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1453"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1455": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1455"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1457": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1457"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1459": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1459"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1461": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1461"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1463": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1463"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1465": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper1465"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3315": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper3315"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3772": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["./node_modules/spectral_graph/spectral_graph_bg.js"].exports["__wbindgen_closure_wrapper3772"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"0":["./node_modules/spectral_graph/spectral_graph_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"./node_modules/spectral_graph/spectral_graph_bg.wasm":"7408e462c41837d18dd1"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// A dependency graph that contains any wasm must all be imported
// asynchronously. This `bootstrap.js` file does the single async import, so
// that no one else needs to worry about it again.
Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./index.js */ "./index.js"))
  .catch(e => console.error("Error importing `index.js`:", e));


/***/ })

/******/ });
//# sourceMappingURL=bootstrap.js.map