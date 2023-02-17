(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/spectral_graph/spectral_graph.js":
/*!*******************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph.js ***!
  \*******************************************************/
/*! exports provided: __wbg_set_wasm, EventLoopJs, WaterfallGraph, WebglGraph, WebgpuGraph, WebgpuGraphJs, __wbindgen_cb_drop, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_error_f851667af71bcfc6, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbindgen_object_drop_ref, __wbindgen_number_get, __wbg_instanceof_Window_e266f02eee43b570, __wbg_document_950215a728589a2d, __wbg_navigator_b18e629f7f0b75fa, __wbg_innerWidth_7e9d12e05bcb598e, __wbg_innerHeight_3ef25a30618357e0, __wbg_devicePixelRatio_5f8f5cab76864090, __wbg_cancelAnimationFrame_d079cdb83bc43b26, __wbg_matchMedia_967e50e4289050fa, __wbg_requestAnimationFrame_afe426b568f84138, __wbg_get_e6ae480a4b8df368, __wbg_clearTimeout_b2b8af0f044e02e9, __wbg_setTimeout_6609c9aa64f32bfc, __wbg_fullscreenElement_65f14a4df7c25129, __wbg_createElement_e2a0e21263eb5416, __wbg_exitFullscreen_36506b10bd87f8b8, __wbg_getElementById_eb93a47327bb5585, __wbg_querySelectorAll_608b5716e2a3baf0, __wbg_x_0938e87a3ff14a2e, __wbg_y_b881176a43492948, __wbg_setProperty_21e2e7868b86a93e, __wbg_instanceof_GpuAdapter_6a21ec3028a6a633, __wbg_requestDevice_98a881f5f37cbc1b, __wbg_submit_145accdc4854b69b, __wbg_writeTexture_a747d2eb64753216, __wbg_end_90bec30eeecaac54, __wbg_setBindGroup_799966434e921168, __wbg_draw_da079c427d4e1307, __wbg_setPipeline_4b1f6ab51617f980, __wbg_deltaX_b7d127c94d6265c0, __wbg_deltaY_b32fa858e16edcc0, __wbg_deltaMode_11f7b19e64d9a515, __wbg_clientX_35f23f953e04ec0e, __wbg_clientY_8104e462abc0b3ec, __wbg_offsetX_413d9f02022e72ad, __wbg_offsetY_488f80a0a9666028, __wbg_ctrlKey_e1b8f1de1eb24d5d, __wbg_shiftKey_fdd99b6df96e25c5, __wbg_altKey_d531a4d3704557cb, __wbg_metaKey_934772989e28020c, __wbg_button_a1c470d5e4c997f2, __wbg_buttons_42a7b7de33d8e572, __wbg_movementX_f4d07f6658c1e16f, __wbg_movementY_30276c1f90aec4fa, __wbg_queue_6b0eedcf46d47cbd, __wbg_createBindGroup_2a20ed419eb0c234, __wbg_createBindGroupLayout_d8f7eb1e6a48042e, __wbg_createBuffer_7c429b6a1c19d86f, __wbg_createCommandEncoder_16ef0a1822a74575, __wbg_createComputePipeline_9d9c4c1e7c177a43, __wbg_createPipelineLayout_651e444b8d7b374a, __wbg_createRenderPipeline_adf9ebf96b9eb9b4, __wbg_createSampler_3246c59a5aeec1ce, __wbg_createShaderModule_58ad41a3299a4bb9, __wbg_createTexture_ea9e43be4047490d, __wbg_createView_d0df6318b34e3b5d, __wbg_pointerId_d2caae4465ba386f, __wbg_pressure_352c13794490720b, __wbg_pointerType_df759fa0bd6634ed, __wbg_getBoundingClientRect_aaa701cbcb448965, __wbg_requestFullscreen_4eee04b9090fa98a, __wbg_setAttribute_79c9562d32d05e66, __wbg_setPointerCapture_5479dc0d082282b7, __wbg_getMappedRange_33ceebd7bbe29781, __wbg_mapAsync_10d0f6703ef03e7b, __wbg_unmap_ae21c65ca7ae9598, __wbg_label_9a9e9fc564518aa6, __wbg_beginComputePass_3a26c65b3bbaff3f, __wbg_beginRenderPass_db57aa384a7aef06, __wbg_copyBufferToBuffer_dfab33ec8c9e760e, __wbg_finish_72c07625138235ea, __wbg_finish_e43769cf456060ff, __wbg_matches_46e979ff3e4d0811, __wbg_now_c644db5194be8437, __wbg_style_2141664e428fef46, __wbg_debug_8db2eed1bf6c1e2a, __wbg_error_fe807da27c4a4ced, __wbg_error_2d344a50ccf38b3b, __wbg_info_9e6db45ac337c3b5, __wbg_log_7bb108d119bafbc1, __wbg_warn_e57696dbb3977030, __wbg_addEventListener_615d4590d38da1c9, __wbg_addEventListener_cf5b03cd29763277, __wbg_removeEventListener_343e3ea9fe4c8533, __wbg_configure_2eba1e396591bdd7, __wbg_getCurrentTexture_0f26ea6da8c0f77c, __wbg_getBindGroupLayout_7478e25935b9d2e8, __wbg_target_b629c177f9bee3da, __wbg_cancelBubble_c9a8182589205d54, __wbg_preventDefault_16b2170b12f56317, __wbg_stopPropagation_7647c9985222f9b0, __wbg_dispatchWorkgroups_44644514248ca896, __wbg_end_4f73dcb320797ca5, __wbg_setPipeline_c1c3fde5d44173c8, __wbg_setBindGroup_534bbf726e58dd0d, __wbg_width_a40e21a22129b197, __wbg_setwidth_81c62bc806e0a727, __wbg_height_98d51321254345a5, __wbg_setheight_98cf0db22c40ef07, __wbg_getContext_3ae404b649cf9287, __wbg_get_8187c9b59091f3ad, __wbg_charCode_504e79c3e550d1bb, __wbg_keyCode_b33194be2ceec53b, __wbg_altKey_dff2a075455ac01b, __wbg_ctrlKey_993b558f853d64ce, __wbg_shiftKey_31e62e9d172b26f0, __wbg_metaKey_9f0f19692d0498bd, __wbg_key_f0decac219aa904b, __wbg_code_aed21120de275a12, __wbg_getModifierState_03b72700dbe33ad6, __wbg_gpu_383beebfe7730ae8, __wbindgen_number_new, __wbg_requestAdapter_1e9aee61dd467483, __wbg_matches_7b5ad9e6bb56f1f3, __wbg_addListener_dfc3f9e430149b14, __wbg_removeListener_6f811d2fb59768b9, __wbg_appendChild_b8199dc1655c852d, __wbg_new_b525de17f44a8943, __wbg_push_49c286f04dd3bf59, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbg_call_9495de66fdbe016b, __wbg_is_8f1618fe9a4fd388, __wbg_new_f9876326328f45ed, __wbg_new_9d3a9ce4282a18a8, __wbg_resolve_fd40f858d9db1a04, __wbg_then_ec5db6d509eb475f, __wbg_then_f753623316e2873a, __wbg_globalThis_87cbb8506fecf3a9, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_global_c85a9259e621f3db, __wbg_new_537b7341ce90bb31, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5, __wbg_buffer_5f1fc856188c4b44, __wbg_length_27a2afe8ab42b09f, __wbg_set_17499e8aa4003ebd, __wbg_get_baf4855f9a986186, __wbg_set_6aa458a4ebdb65cb, __wbindgen_is_undefined, __wbg_buffer_cf65c07de34b9a08, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper1451, __wbindgen_closure_wrapper1453, __wbindgen_closure_wrapper1455, __wbindgen_closure_wrapper1457, __wbindgen_closure_wrapper1459, __wbindgen_closure_wrapper1461, __wbindgen_closure_wrapper1463, __wbindgen_closure_wrapper1465, __wbindgen_closure_wrapper3315, __wbindgen_closure_wrapper3772 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spectral_graph_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spectral_graph_bg.wasm */ "./node_modules/spectral_graph/spectral_graph_bg.wasm");
/* harmony import */ var _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./spectral_graph_bg.js */ "./node_modules/spectral_graph/spectral_graph_bg.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_wasm", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_wasm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventLoopJs", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["EventLoopJs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaterfallGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WaterfallGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebglGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebglGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraph", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebgpuGraph"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraphJs", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["WebgpuGraphJs"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_cb_drop"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_string_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_clone_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_f851667af71bcfc6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_f851667af71bcfc6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_abda76e883ba8a5f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_abda76e883ba8a5f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_658279fe44541cf6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stack_658279fe44541cf6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_object_drop_ref"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_number_get"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_e266f02eee43b570", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_Window_e266f02eee43b570"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_950215a728589a2d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_document_950215a728589a2d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_navigator_b18e629f7f0b75fa", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_navigator_b18e629f7f0b75fa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_7e9d12e05bcb598e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerWidth_7e9d12e05bcb598e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_3ef25a30618357e0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_innerHeight_3ef25a30618357e0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_devicePixelRatio_5f8f5cab76864090", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_devicePixelRatio_5f8f5cab76864090"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelAnimationFrame_d079cdb83bc43b26", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cancelAnimationFrame_d079cdb83bc43b26"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matchMedia_967e50e4289050fa", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matchMedia_967e50e4289050fa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAnimationFrame_afe426b568f84138", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestAnimationFrame_afe426b568f84138"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_e6ae480a4b8df368", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_e6ae480a4b8df368"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearTimeout_b2b8af0f044e02e9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clearTimeout_b2b8af0f044e02e9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setTimeout_6609c9aa64f32bfc", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setTimeout_6609c9aa64f32bfc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_fullscreenElement_65f14a4df7c25129", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_fullscreenElement_65f14a4df7c25129"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createElement_e2a0e21263eb5416", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createElement_e2a0e21263eb5416"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_exitFullscreen_36506b10bd87f8b8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_exitFullscreen_36506b10bd87f8b8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementById_eb93a47327bb5585", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getElementById_eb93a47327bb5585"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_querySelectorAll_608b5716e2a3baf0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_querySelectorAll_608b5716e2a3baf0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_x_0938e87a3ff14a2e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_x_0938e87a3ff14a2e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_y_b881176a43492948", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_y_b881176a43492948"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setProperty_21e2e7868b86a93e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setProperty_21e2e7868b86a93e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_GpuAdapter_6a21ec3028a6a633", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_instanceof_GpuAdapter_6a21ec3028a6a633"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestDevice_98a881f5f37cbc1b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestDevice_98a881f5f37cbc1b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_submit_145accdc4854b69b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_submit_145accdc4854b69b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_writeTexture_a747d2eb64753216", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_writeTexture_a747d2eb64753216"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_end_90bec30eeecaac54", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_end_90bec30eeecaac54"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setBindGroup_799966434e921168", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setBindGroup_799966434e921168"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_draw_da079c427d4e1307", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_draw_da079c427d4e1307"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPipeline_4b1f6ab51617f980", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setPipeline_4b1f6ab51617f980"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaX_b7d127c94d6265c0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaX_b7d127c94d6265c0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaY_b32fa858e16edcc0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaY_b32fa858e16edcc0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaMode_11f7b19e64d9a515", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_deltaMode_11f7b19e64d9a515"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientX_35f23f953e04ec0e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clientX_35f23f953e04ec0e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientY_8104e462abc0b3ec", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_clientY_8104e462abc0b3ec"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetX_413d9f02022e72ad", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_offsetX_413d9f02022e72ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetY_488f80a0a9666028", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_offsetY_488f80a0a9666028"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_e1b8f1de1eb24d5d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ctrlKey_e1b8f1de1eb24d5d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_fdd99b6df96e25c5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shiftKey_fdd99b6df96e25c5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_d531a4d3704557cb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_altKey_d531a4d3704557cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_934772989e28020c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_metaKey_934772989e28020c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_button_a1c470d5e4c997f2", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_button_a1c470d5e4c997f2"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buttons_42a7b7de33d8e572", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buttons_42a7b7de33d8e572"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementX_f4d07f6658c1e16f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_movementX_f4d07f6658c1e16f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementY_30276c1f90aec4fa", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_movementY_30276c1f90aec4fa"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_queue_6b0eedcf46d47cbd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_queue_6b0eedcf46d47cbd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBindGroup_2a20ed419eb0c234", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBindGroup_2a20ed419eb0c234"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBindGroupLayout_d8f7eb1e6a48042e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBindGroupLayout_d8f7eb1e6a48042e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_7c429b6a1c19d86f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createBuffer_7c429b6a1c19d86f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createCommandEncoder_16ef0a1822a74575", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createCommandEncoder_16ef0a1822a74575"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createComputePipeline_9d9c4c1e7c177a43", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createComputePipeline_9d9c4c1e7c177a43"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createPipelineLayout_651e444b8d7b374a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createPipelineLayout_651e444b8d7b374a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderPipeline_adf9ebf96b9eb9b4", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createRenderPipeline_adf9ebf96b9eb9b4"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createSampler_3246c59a5aeec1ce", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createSampler_3246c59a5aeec1ce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShaderModule_58ad41a3299a4bb9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createShaderModule_58ad41a3299a4bb9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_ea9e43be4047490d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createTexture_ea9e43be4047490d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_createView_d0df6318b34e3b5d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_createView_d0df6318b34e3b5d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerId_d2caae4465ba386f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pointerId_d2caae4465ba386f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pressure_352c13794490720b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pressure_352c13794490720b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerType_df759fa0bd6634ed", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_pointerType_df759fa0bd6634ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBoundingClientRect_aaa701cbcb448965", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getBoundingClientRect_aaa701cbcb448965"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestFullscreen_4eee04b9090fa98a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestFullscreen_4eee04b9090fa98a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_79c9562d32d05e66", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setAttribute_79c9562d32d05e66"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPointerCapture_5479dc0d082282b7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setPointerCapture_5479dc0d082282b7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getMappedRange_33ceebd7bbe29781", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getMappedRange_33ceebd7bbe29781"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_mapAsync_10d0f6703ef03e7b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_mapAsync_10d0f6703ef03e7b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_unmap_ae21c65ca7ae9598", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_unmap_ae21c65ca7ae9598"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_label_9a9e9fc564518aa6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_label_9a9e9fc564518aa6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginComputePass_3a26c65b3bbaff3f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_beginComputePass_3a26c65b3bbaff3f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginRenderPass_db57aa384a7aef06", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_beginRenderPass_db57aa384a7aef06"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyBufferToBuffer_dfab33ec8c9e760e", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_copyBufferToBuffer_dfab33ec8c9e760e"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_finish_72c07625138235ea", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_finish_72c07625138235ea"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_finish_e43769cf456060ff", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_finish_e43769cf456060ff"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_46e979ff3e4d0811", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matches_46e979ff3e4d0811"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_c644db5194be8437", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_now_c644db5194be8437"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_style_2141664e428fef46", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_style_2141664e428fef46"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_debug_8db2eed1bf6c1e2a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_debug_8db2eed1bf6c1e2a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_fe807da27c4a4ced", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_fe807da27c4a4ced"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_2d344a50ccf38b3b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_error_2d344a50ccf38b3b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_info_9e6db45ac337c3b5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_info_9e6db45ac337c3b5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_7bb108d119bafbc1", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_log_7bb108d119bafbc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_warn_e57696dbb3977030", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_warn_e57696dbb3977030"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_615d4590d38da1c9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addEventListener_615d4590d38da1c9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_cf5b03cd29763277", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addEventListener_cf5b03cd29763277"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeEventListener_343e3ea9fe4c8533", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_removeEventListener_343e3ea9fe4c8533"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_configure_2eba1e396591bdd7", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_configure_2eba1e396591bdd7"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getCurrentTexture_0f26ea6da8c0f77c", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getCurrentTexture_0f26ea6da8c0f77c"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBindGroupLayout_7478e25935b9d2e8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getBindGroupLayout_7478e25935b9d2e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_target_b629c177f9bee3da", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_target_b629c177f9bee3da"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelBubble_c9a8182589205d54", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_cancelBubble_c9a8182589205d54"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_preventDefault_16b2170b12f56317", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_preventDefault_16b2170b12f56317"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_stopPropagation_7647c9985222f9b0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_stopPropagation_7647c9985222f9b0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_dispatchWorkgroups_44644514248ca896", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_dispatchWorkgroups_44644514248ca896"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_end_4f73dcb320797ca5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_end_4f73dcb320797ca5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPipeline_c1c3fde5d44173c8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setPipeline_c1c3fde5d44173c8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setBindGroup_534bbf726e58dd0d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setBindGroup_534bbf726e58dd0d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_a40e21a22129b197", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_width_a40e21a22129b197"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_81c62bc806e0a727", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setwidth_81c62bc806e0a727"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_98d51321254345a5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_height_98d51321254345a5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_98cf0db22c40ef07", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_setheight_98cf0db22c40ef07"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_3ae404b649cf9287", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getContext_3ae404b649cf9287"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_8187c9b59091f3ad", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_8187c9b59091f3ad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_charCode_504e79c3e550d1bb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_charCode_504e79c3e550d1bb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_keyCode_b33194be2ceec53b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_keyCode_b33194be2ceec53b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_dff2a075455ac01b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_altKey_dff2a075455ac01b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_993b558f853d64ce", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_ctrlKey_993b558f853d64ce"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_31e62e9d172b26f0", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_shiftKey_31e62e9d172b26f0"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_9f0f19692d0498bd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_metaKey_9f0f19692d0498bd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_key_f0decac219aa904b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_key_f0decac219aa904b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_code_aed21120de275a12", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_code_aed21120de275a12"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_getModifierState_03b72700dbe33ad6", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_getModifierState_03b72700dbe33ad6"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_gpu_383beebfe7730ae8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_gpu_383beebfe7730ae8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_new", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_number_new"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAdapter_1e9aee61dd467483", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_requestAdapter_1e9aee61dd467483"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_7b5ad9e6bb56f1f3", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_matches_7b5ad9e6bb56f1f3"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_addListener_dfc3f9e430149b14", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_addListener_dfc3f9e430149b14"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeListener_6f811d2fb59768b9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_removeListener_6f811d2fb59768b9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_appendChild_b8199dc1655c852d", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_appendChild_b8199dc1655c852d"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_b525de17f44a8943", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_b525de17f44a8943"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_49c286f04dd3bf59", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_push_49c286f04dd3bf59"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_2b8b6bd7753c76ba", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newnoargs_2b8b6bd7753c76ba"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_95d1ea488d03e4e8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_95d1ea488d03e4e8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_9495de66fdbe016b", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_call_9495de66fdbe016b"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_is_8f1618fe9a4fd388", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_is_8f1618fe9a4fd388"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_f9876326328f45ed", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_f9876326328f45ed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9d3a9ce4282a18a8", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_9d3a9ce4282a18a8"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_fd40f858d9db1a04", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_resolve_fd40f858d9db1a04"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_ec5db6d509eb475f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_then_ec5db6d509eb475f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_f753623316e2873a", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_then_f753623316e2873a"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_87cbb8506fecf3a9", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_globalThis_87cbb8506fecf3a9"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_e7c1f827057f6584", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_self_e7c1f827057f6584"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_a09ec664e14b1b81", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_window_a09ec664e14b1b81"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_c85a9259e621f3db", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_global_c85a9259e621f3db"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_537b7341ce90bb31", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_new_537b7341ce90bb31"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_5f1fc856188c4b44", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buffer_5f1fc856188c4b44"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_27a2afe8ab42b09f", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_length_27a2afe8ab42b09f"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_17499e8aa4003ebd", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_17499e8aa4003ebd"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_baf4855f9a986186", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_get_baf4855f9a986186"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_6aa458a4ebdb65cb", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_6aa458a4ebdb65cb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_is_undefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_cf65c07de34b9a08", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_buffer_cf65c07de34b9a08"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_debug_string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_throw"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_memory"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1451", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1451"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1453", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1453"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1455", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1455"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1457", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1457"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1459", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1459"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1461", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1461"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1463", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1463"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1465", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper1465"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3315", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper3315"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3772", function() { return _spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbindgen_closure_wrapper3772"]; });



Object(_spectral_graph_bg_js__WEBPACK_IMPORTED_MODULE_1__["__wbg_set_wasm"])(_spectral_graph_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ "./node_modules/spectral_graph/spectral_graph_bg.js":
/*!**********************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph_bg.js ***!
  \**********************************************************/
/*! exports provided: __wbg_set_wasm, EventLoopJs, WaterfallGraph, WebglGraph, WebgpuGraph, WebgpuGraphJs, __wbindgen_cb_drop, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_error_f851667af71bcfc6, __wbg_new_abda76e883ba8a5f, __wbg_stack_658279fe44541cf6, __wbindgen_object_drop_ref, __wbindgen_number_get, __wbg_instanceof_Window_e266f02eee43b570, __wbg_document_950215a728589a2d, __wbg_navigator_b18e629f7f0b75fa, __wbg_innerWidth_7e9d12e05bcb598e, __wbg_innerHeight_3ef25a30618357e0, __wbg_devicePixelRatio_5f8f5cab76864090, __wbg_cancelAnimationFrame_d079cdb83bc43b26, __wbg_matchMedia_967e50e4289050fa, __wbg_requestAnimationFrame_afe426b568f84138, __wbg_get_e6ae480a4b8df368, __wbg_clearTimeout_b2b8af0f044e02e9, __wbg_setTimeout_6609c9aa64f32bfc, __wbg_fullscreenElement_65f14a4df7c25129, __wbg_createElement_e2a0e21263eb5416, __wbg_exitFullscreen_36506b10bd87f8b8, __wbg_getElementById_eb93a47327bb5585, __wbg_querySelectorAll_608b5716e2a3baf0, __wbg_x_0938e87a3ff14a2e, __wbg_y_b881176a43492948, __wbg_setProperty_21e2e7868b86a93e, __wbg_instanceof_GpuAdapter_6a21ec3028a6a633, __wbg_requestDevice_98a881f5f37cbc1b, __wbg_submit_145accdc4854b69b, __wbg_writeTexture_a747d2eb64753216, __wbg_end_90bec30eeecaac54, __wbg_setBindGroup_799966434e921168, __wbg_draw_da079c427d4e1307, __wbg_setPipeline_4b1f6ab51617f980, __wbg_deltaX_b7d127c94d6265c0, __wbg_deltaY_b32fa858e16edcc0, __wbg_deltaMode_11f7b19e64d9a515, __wbg_clientX_35f23f953e04ec0e, __wbg_clientY_8104e462abc0b3ec, __wbg_offsetX_413d9f02022e72ad, __wbg_offsetY_488f80a0a9666028, __wbg_ctrlKey_e1b8f1de1eb24d5d, __wbg_shiftKey_fdd99b6df96e25c5, __wbg_altKey_d531a4d3704557cb, __wbg_metaKey_934772989e28020c, __wbg_button_a1c470d5e4c997f2, __wbg_buttons_42a7b7de33d8e572, __wbg_movementX_f4d07f6658c1e16f, __wbg_movementY_30276c1f90aec4fa, __wbg_queue_6b0eedcf46d47cbd, __wbg_createBindGroup_2a20ed419eb0c234, __wbg_createBindGroupLayout_d8f7eb1e6a48042e, __wbg_createBuffer_7c429b6a1c19d86f, __wbg_createCommandEncoder_16ef0a1822a74575, __wbg_createComputePipeline_9d9c4c1e7c177a43, __wbg_createPipelineLayout_651e444b8d7b374a, __wbg_createRenderPipeline_adf9ebf96b9eb9b4, __wbg_createSampler_3246c59a5aeec1ce, __wbg_createShaderModule_58ad41a3299a4bb9, __wbg_createTexture_ea9e43be4047490d, __wbg_createView_d0df6318b34e3b5d, __wbg_pointerId_d2caae4465ba386f, __wbg_pressure_352c13794490720b, __wbg_pointerType_df759fa0bd6634ed, __wbg_getBoundingClientRect_aaa701cbcb448965, __wbg_requestFullscreen_4eee04b9090fa98a, __wbg_setAttribute_79c9562d32d05e66, __wbg_setPointerCapture_5479dc0d082282b7, __wbg_getMappedRange_33ceebd7bbe29781, __wbg_mapAsync_10d0f6703ef03e7b, __wbg_unmap_ae21c65ca7ae9598, __wbg_label_9a9e9fc564518aa6, __wbg_beginComputePass_3a26c65b3bbaff3f, __wbg_beginRenderPass_db57aa384a7aef06, __wbg_copyBufferToBuffer_dfab33ec8c9e760e, __wbg_finish_72c07625138235ea, __wbg_finish_e43769cf456060ff, __wbg_matches_46e979ff3e4d0811, __wbg_now_c644db5194be8437, __wbg_style_2141664e428fef46, __wbg_debug_8db2eed1bf6c1e2a, __wbg_error_fe807da27c4a4ced, __wbg_error_2d344a50ccf38b3b, __wbg_info_9e6db45ac337c3b5, __wbg_log_7bb108d119bafbc1, __wbg_warn_e57696dbb3977030, __wbg_addEventListener_615d4590d38da1c9, __wbg_addEventListener_cf5b03cd29763277, __wbg_removeEventListener_343e3ea9fe4c8533, __wbg_configure_2eba1e396591bdd7, __wbg_getCurrentTexture_0f26ea6da8c0f77c, __wbg_getBindGroupLayout_7478e25935b9d2e8, __wbg_target_b629c177f9bee3da, __wbg_cancelBubble_c9a8182589205d54, __wbg_preventDefault_16b2170b12f56317, __wbg_stopPropagation_7647c9985222f9b0, __wbg_dispatchWorkgroups_44644514248ca896, __wbg_end_4f73dcb320797ca5, __wbg_setPipeline_c1c3fde5d44173c8, __wbg_setBindGroup_534bbf726e58dd0d, __wbg_width_a40e21a22129b197, __wbg_setwidth_81c62bc806e0a727, __wbg_height_98d51321254345a5, __wbg_setheight_98cf0db22c40ef07, __wbg_getContext_3ae404b649cf9287, __wbg_get_8187c9b59091f3ad, __wbg_charCode_504e79c3e550d1bb, __wbg_keyCode_b33194be2ceec53b, __wbg_altKey_dff2a075455ac01b, __wbg_ctrlKey_993b558f853d64ce, __wbg_shiftKey_31e62e9d172b26f0, __wbg_metaKey_9f0f19692d0498bd, __wbg_key_f0decac219aa904b, __wbg_code_aed21120de275a12, __wbg_getModifierState_03b72700dbe33ad6, __wbg_gpu_383beebfe7730ae8, __wbindgen_number_new, __wbg_requestAdapter_1e9aee61dd467483, __wbg_matches_7b5ad9e6bb56f1f3, __wbg_addListener_dfc3f9e430149b14, __wbg_removeListener_6f811d2fb59768b9, __wbg_appendChild_b8199dc1655c852d, __wbg_new_b525de17f44a8943, __wbg_push_49c286f04dd3bf59, __wbg_newnoargs_2b8b6bd7753c76ba, __wbg_call_95d1ea488d03e4e8, __wbg_call_9495de66fdbe016b, __wbg_is_8f1618fe9a4fd388, __wbg_new_f9876326328f45ed, __wbg_new_9d3a9ce4282a18a8, __wbg_resolve_fd40f858d9db1a04, __wbg_then_ec5db6d509eb475f, __wbg_then_f753623316e2873a, __wbg_globalThis_87cbb8506fecf3a9, __wbg_self_e7c1f827057f6584, __wbg_window_a09ec664e14b1b81, __wbg_global_c85a9259e621f3db, __wbg_new_537b7341ce90bb31, __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5, __wbg_buffer_5f1fc856188c4b44, __wbg_length_27a2afe8ab42b09f, __wbg_set_17499e8aa4003ebd, __wbg_get_baf4855f9a986186, __wbg_set_6aa458a4ebdb65cb, __wbindgen_is_undefined, __wbg_buffer_cf65c07de34b9a08, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_memory, __wbindgen_closure_wrapper1451, __wbindgen_closure_wrapper1453, __wbindgen_closure_wrapper1455, __wbindgen_closure_wrapper1457, __wbindgen_closure_wrapper1459, __wbindgen_closure_wrapper1461, __wbindgen_closure_wrapper1463, __wbindgen_closure_wrapper1465, __wbindgen_closure_wrapper3315, __wbindgen_closure_wrapper3772 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_wasm", function() { return __wbg_set_wasm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventLoopJs", function() { return EventLoopJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaterfallGraph", function() { return WaterfallGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebglGraph", function() { return WebglGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraph", function() { return WebgpuGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebgpuGraphJs", function() { return WebgpuGraphJs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_cb_drop", function() { return __wbindgen_cb_drop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_string_new", function() { return __wbindgen_string_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_clone_ref", function() { return __wbindgen_object_clone_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_f851667af71bcfc6", function() { return __wbg_error_f851667af71bcfc6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_abda76e883ba8a5f", function() { return __wbg_new_abda76e883ba8a5f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stack_658279fe44541cf6", function() { return __wbg_stack_658279fe44541cf6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_object_drop_ref", function() { return __wbindgen_object_drop_ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_get", function() { return __wbindgen_number_get; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_Window_e266f02eee43b570", function() { return __wbg_instanceof_Window_e266f02eee43b570; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_document_950215a728589a2d", function() { return __wbg_document_950215a728589a2d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_navigator_b18e629f7f0b75fa", function() { return __wbg_navigator_b18e629f7f0b75fa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerWidth_7e9d12e05bcb598e", function() { return __wbg_innerWidth_7e9d12e05bcb598e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_innerHeight_3ef25a30618357e0", function() { return __wbg_innerHeight_3ef25a30618357e0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_devicePixelRatio_5f8f5cab76864090", function() { return __wbg_devicePixelRatio_5f8f5cab76864090; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelAnimationFrame_d079cdb83bc43b26", function() { return __wbg_cancelAnimationFrame_d079cdb83bc43b26; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matchMedia_967e50e4289050fa", function() { return __wbg_matchMedia_967e50e4289050fa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAnimationFrame_afe426b568f84138", function() { return __wbg_requestAnimationFrame_afe426b568f84138; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_e6ae480a4b8df368", function() { return __wbg_get_e6ae480a4b8df368; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clearTimeout_b2b8af0f044e02e9", function() { return __wbg_clearTimeout_b2b8af0f044e02e9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setTimeout_6609c9aa64f32bfc", function() { return __wbg_setTimeout_6609c9aa64f32bfc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_fullscreenElement_65f14a4df7c25129", function() { return __wbg_fullscreenElement_65f14a4df7c25129; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createElement_e2a0e21263eb5416", function() { return __wbg_createElement_e2a0e21263eb5416; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_exitFullscreen_36506b10bd87f8b8", function() { return __wbg_exitFullscreen_36506b10bd87f8b8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getElementById_eb93a47327bb5585", function() { return __wbg_getElementById_eb93a47327bb5585; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_querySelectorAll_608b5716e2a3baf0", function() { return __wbg_querySelectorAll_608b5716e2a3baf0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_x_0938e87a3ff14a2e", function() { return __wbg_x_0938e87a3ff14a2e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_y_b881176a43492948", function() { return __wbg_y_b881176a43492948; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setProperty_21e2e7868b86a93e", function() { return __wbg_setProperty_21e2e7868b86a93e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_instanceof_GpuAdapter_6a21ec3028a6a633", function() { return __wbg_instanceof_GpuAdapter_6a21ec3028a6a633; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestDevice_98a881f5f37cbc1b", function() { return __wbg_requestDevice_98a881f5f37cbc1b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_submit_145accdc4854b69b", function() { return __wbg_submit_145accdc4854b69b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_writeTexture_a747d2eb64753216", function() { return __wbg_writeTexture_a747d2eb64753216; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_end_90bec30eeecaac54", function() { return __wbg_end_90bec30eeecaac54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setBindGroup_799966434e921168", function() { return __wbg_setBindGroup_799966434e921168; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_draw_da079c427d4e1307", function() { return __wbg_draw_da079c427d4e1307; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPipeline_4b1f6ab51617f980", function() { return __wbg_setPipeline_4b1f6ab51617f980; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaX_b7d127c94d6265c0", function() { return __wbg_deltaX_b7d127c94d6265c0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaY_b32fa858e16edcc0", function() { return __wbg_deltaY_b32fa858e16edcc0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_deltaMode_11f7b19e64d9a515", function() { return __wbg_deltaMode_11f7b19e64d9a515; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientX_35f23f953e04ec0e", function() { return __wbg_clientX_35f23f953e04ec0e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_clientY_8104e462abc0b3ec", function() { return __wbg_clientY_8104e462abc0b3ec; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetX_413d9f02022e72ad", function() { return __wbg_offsetX_413d9f02022e72ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_offsetY_488f80a0a9666028", function() { return __wbg_offsetY_488f80a0a9666028; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_e1b8f1de1eb24d5d", function() { return __wbg_ctrlKey_e1b8f1de1eb24d5d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_fdd99b6df96e25c5", function() { return __wbg_shiftKey_fdd99b6df96e25c5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_d531a4d3704557cb", function() { return __wbg_altKey_d531a4d3704557cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_934772989e28020c", function() { return __wbg_metaKey_934772989e28020c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_button_a1c470d5e4c997f2", function() { return __wbg_button_a1c470d5e4c997f2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buttons_42a7b7de33d8e572", function() { return __wbg_buttons_42a7b7de33d8e572; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementX_f4d07f6658c1e16f", function() { return __wbg_movementX_f4d07f6658c1e16f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_movementY_30276c1f90aec4fa", function() { return __wbg_movementY_30276c1f90aec4fa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_queue_6b0eedcf46d47cbd", function() { return __wbg_queue_6b0eedcf46d47cbd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBindGroup_2a20ed419eb0c234", function() { return __wbg_createBindGroup_2a20ed419eb0c234; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBindGroupLayout_d8f7eb1e6a48042e", function() { return __wbg_createBindGroupLayout_d8f7eb1e6a48042e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createBuffer_7c429b6a1c19d86f", function() { return __wbg_createBuffer_7c429b6a1c19d86f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createCommandEncoder_16ef0a1822a74575", function() { return __wbg_createCommandEncoder_16ef0a1822a74575; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createComputePipeline_9d9c4c1e7c177a43", function() { return __wbg_createComputePipeline_9d9c4c1e7c177a43; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createPipelineLayout_651e444b8d7b374a", function() { return __wbg_createPipelineLayout_651e444b8d7b374a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createRenderPipeline_adf9ebf96b9eb9b4", function() { return __wbg_createRenderPipeline_adf9ebf96b9eb9b4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createSampler_3246c59a5aeec1ce", function() { return __wbg_createSampler_3246c59a5aeec1ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createShaderModule_58ad41a3299a4bb9", function() { return __wbg_createShaderModule_58ad41a3299a4bb9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createTexture_ea9e43be4047490d", function() { return __wbg_createTexture_ea9e43be4047490d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_createView_d0df6318b34e3b5d", function() { return __wbg_createView_d0df6318b34e3b5d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerId_d2caae4465ba386f", function() { return __wbg_pointerId_d2caae4465ba386f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pressure_352c13794490720b", function() { return __wbg_pressure_352c13794490720b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_pointerType_df759fa0bd6634ed", function() { return __wbg_pointerType_df759fa0bd6634ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBoundingClientRect_aaa701cbcb448965", function() { return __wbg_getBoundingClientRect_aaa701cbcb448965; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestFullscreen_4eee04b9090fa98a", function() { return __wbg_requestFullscreen_4eee04b9090fa98a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setAttribute_79c9562d32d05e66", function() { return __wbg_setAttribute_79c9562d32d05e66; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPointerCapture_5479dc0d082282b7", function() { return __wbg_setPointerCapture_5479dc0d082282b7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getMappedRange_33ceebd7bbe29781", function() { return __wbg_getMappedRange_33ceebd7bbe29781; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_mapAsync_10d0f6703ef03e7b", function() { return __wbg_mapAsync_10d0f6703ef03e7b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_unmap_ae21c65ca7ae9598", function() { return __wbg_unmap_ae21c65ca7ae9598; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_label_9a9e9fc564518aa6", function() { return __wbg_label_9a9e9fc564518aa6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginComputePass_3a26c65b3bbaff3f", function() { return __wbg_beginComputePass_3a26c65b3bbaff3f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_beginRenderPass_db57aa384a7aef06", function() { return __wbg_beginRenderPass_db57aa384a7aef06; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_copyBufferToBuffer_dfab33ec8c9e760e", function() { return __wbg_copyBufferToBuffer_dfab33ec8c9e760e; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_finish_72c07625138235ea", function() { return __wbg_finish_72c07625138235ea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_finish_e43769cf456060ff", function() { return __wbg_finish_e43769cf456060ff; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_46e979ff3e4d0811", function() { return __wbg_matches_46e979ff3e4d0811; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_now_c644db5194be8437", function() { return __wbg_now_c644db5194be8437; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_style_2141664e428fef46", function() { return __wbg_style_2141664e428fef46; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_debug_8db2eed1bf6c1e2a", function() { return __wbg_debug_8db2eed1bf6c1e2a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_fe807da27c4a4ced", function() { return __wbg_error_fe807da27c4a4ced; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_error_2d344a50ccf38b3b", function() { return __wbg_error_2d344a50ccf38b3b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_info_9e6db45ac337c3b5", function() { return __wbg_info_9e6db45ac337c3b5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_log_7bb108d119bafbc1", function() { return __wbg_log_7bb108d119bafbc1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_warn_e57696dbb3977030", function() { return __wbg_warn_e57696dbb3977030; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_615d4590d38da1c9", function() { return __wbg_addEventListener_615d4590d38da1c9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addEventListener_cf5b03cd29763277", function() { return __wbg_addEventListener_cf5b03cd29763277; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeEventListener_343e3ea9fe4c8533", function() { return __wbg_removeEventListener_343e3ea9fe4c8533; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_configure_2eba1e396591bdd7", function() { return __wbg_configure_2eba1e396591bdd7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getCurrentTexture_0f26ea6da8c0f77c", function() { return __wbg_getCurrentTexture_0f26ea6da8c0f77c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getBindGroupLayout_7478e25935b9d2e8", function() { return __wbg_getBindGroupLayout_7478e25935b9d2e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_target_b629c177f9bee3da", function() { return __wbg_target_b629c177f9bee3da; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_cancelBubble_c9a8182589205d54", function() { return __wbg_cancelBubble_c9a8182589205d54; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_preventDefault_16b2170b12f56317", function() { return __wbg_preventDefault_16b2170b12f56317; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_stopPropagation_7647c9985222f9b0", function() { return __wbg_stopPropagation_7647c9985222f9b0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_dispatchWorkgroups_44644514248ca896", function() { return __wbg_dispatchWorkgroups_44644514248ca896; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_end_4f73dcb320797ca5", function() { return __wbg_end_4f73dcb320797ca5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setPipeline_c1c3fde5d44173c8", function() { return __wbg_setPipeline_c1c3fde5d44173c8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setBindGroup_534bbf726e58dd0d", function() { return __wbg_setBindGroup_534bbf726e58dd0d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_width_a40e21a22129b197", function() { return __wbg_width_a40e21a22129b197; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setwidth_81c62bc806e0a727", function() { return __wbg_setwidth_81c62bc806e0a727; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_height_98d51321254345a5", function() { return __wbg_height_98d51321254345a5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_setheight_98cf0db22c40ef07", function() { return __wbg_setheight_98cf0db22c40ef07; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getContext_3ae404b649cf9287", function() { return __wbg_getContext_3ae404b649cf9287; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_8187c9b59091f3ad", function() { return __wbg_get_8187c9b59091f3ad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_charCode_504e79c3e550d1bb", function() { return __wbg_charCode_504e79c3e550d1bb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_keyCode_b33194be2ceec53b", function() { return __wbg_keyCode_b33194be2ceec53b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_altKey_dff2a075455ac01b", function() { return __wbg_altKey_dff2a075455ac01b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_ctrlKey_993b558f853d64ce", function() { return __wbg_ctrlKey_993b558f853d64ce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_shiftKey_31e62e9d172b26f0", function() { return __wbg_shiftKey_31e62e9d172b26f0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_metaKey_9f0f19692d0498bd", function() { return __wbg_metaKey_9f0f19692d0498bd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_key_f0decac219aa904b", function() { return __wbg_key_f0decac219aa904b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_code_aed21120de275a12", function() { return __wbg_code_aed21120de275a12; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_getModifierState_03b72700dbe33ad6", function() { return __wbg_getModifierState_03b72700dbe33ad6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_gpu_383beebfe7730ae8", function() { return __wbg_gpu_383beebfe7730ae8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_number_new", function() { return __wbindgen_number_new; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_requestAdapter_1e9aee61dd467483", function() { return __wbg_requestAdapter_1e9aee61dd467483; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_matches_7b5ad9e6bb56f1f3", function() { return __wbg_matches_7b5ad9e6bb56f1f3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_addListener_dfc3f9e430149b14", function() { return __wbg_addListener_dfc3f9e430149b14; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_removeListener_6f811d2fb59768b9", function() { return __wbg_removeListener_6f811d2fb59768b9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_appendChild_b8199dc1655c852d", function() { return __wbg_appendChild_b8199dc1655c852d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_b525de17f44a8943", function() { return __wbg_new_b525de17f44a8943; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_push_49c286f04dd3bf59", function() { return __wbg_push_49c286f04dd3bf59; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newnoargs_2b8b6bd7753c76ba", function() { return __wbg_newnoargs_2b8b6bd7753c76ba; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_95d1ea488d03e4e8", function() { return __wbg_call_95d1ea488d03e4e8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_call_9495de66fdbe016b", function() { return __wbg_call_9495de66fdbe016b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_is_8f1618fe9a4fd388", function() { return __wbg_is_8f1618fe9a4fd388; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_f9876326328f45ed", function() { return __wbg_new_f9876326328f45ed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_9d3a9ce4282a18a8", function() { return __wbg_new_9d3a9ce4282a18a8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_resolve_fd40f858d9db1a04", function() { return __wbg_resolve_fd40f858d9db1a04; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_ec5db6d509eb475f", function() { return __wbg_then_ec5db6d509eb475f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_then_f753623316e2873a", function() { return __wbg_then_f753623316e2873a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_globalThis_87cbb8506fecf3a9", function() { return __wbg_globalThis_87cbb8506fecf3a9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_self_e7c1f827057f6584", function() { return __wbg_self_e7c1f827057f6584; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_window_a09ec664e14b1b81", function() { return __wbg_window_a09ec664e14b1b81; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_global_c85a9259e621f3db", function() { return __wbg_global_c85a9259e621f3db; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_new_537b7341ce90bb31", function() { return __wbg_new_537b7341ce90bb31; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5", function() { return __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_5f1fc856188c4b44", function() { return __wbg_buffer_5f1fc856188c4b44; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_length_27a2afe8ab42b09f", function() { return __wbg_length_27a2afe8ab42b09f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_17499e8aa4003ebd", function() { return __wbg_set_17499e8aa4003ebd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_get_baf4855f9a986186", function() { return __wbg_get_baf4855f9a986186; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_set_6aa458a4ebdb65cb", function() { return __wbg_set_6aa458a4ebdb65cb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_is_undefined", function() { return __wbindgen_is_undefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbg_buffer_cf65c07de34b9a08", function() { return __wbg_buffer_cf65c07de34b9a08; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_debug_string", function() { return __wbindgen_debug_string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_throw", function() { return __wbindgen_throw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_memory", function() { return __wbindgen_memory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1451", function() { return __wbindgen_closure_wrapper1451; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1453", function() { return __wbindgen_closure_wrapper1453; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1455", function() { return __wbindgen_closure_wrapper1455; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1457", function() { return __wbindgen_closure_wrapper1457; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1459", function() { return __wbindgen_closure_wrapper1459; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1461", function() { return __wbindgen_closure_wrapper1461; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1463", function() { return __wbindgen_closure_wrapper1463; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper1465", function() { return __wbindgen_closure_wrapper1465; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3315", function() { return __wbindgen_closure_wrapper3315; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__wbindgen_closure_wrapper3772", function() { return __wbindgen_closure_wrapper3772; });
let wasm;
function __wbg_set_wasm(val) {
    wasm = val;
}


const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let heap_next = heap.length;

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function _assertBoolean(n) {
    if (typeof(n) !== 'boolean') {
        throw new Error('expected a boolean argument');
    }
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');

    heap[idx] = obj;
    return idx;
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function _assertNum(n) {
    if (typeof(n) !== 'number') throw new Error('expected a number argument');
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

const lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;

let cachedTextEncoder = new lTextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (typeof(arg) !== 'string') throw new Error('expected a string argument');

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);
        if (ret.read !== arg.length) throw new Error('failed to pass whole string');
        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function makeMutClosure(arg0, arg1, dtor, f) {
    const state = { a: arg0, b: arg1, cnt: 1, dtor };
    const real = (...args) => {
        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            if (--state.cnt === 0) {
                wasm.__wbindgen_export_2.get(state.dtor)(a, state.b);

            } else {
                state.a = a;
            }
        }
    };
    real.original = state;

    return real;
}

function logError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        let error = (function () {
            try {
                return e instanceof Error ? `${e.message}\n\nStack:\n${e.stack}` : e.toString();
            } catch(_) {
                return "<failed to stringify thrown value>";
            }
        }());
        console.error("wasm-bindgen: imported JS function that was not marked as `catch` threw an error:", error);
        throw e;
    }
}
function __wbg_adapter_22(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h331b18429ece2b5a(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_25(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h470d8e903762cd12(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_28(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h18ae2b4b0ec29172(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_31(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha82c3aa3d81001f3(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_34(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha414af4736d618a3(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_37(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h215ab4f5ee299503(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_40(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h81b4117a85361edd(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_43(arg0, arg1) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__heb98f5f875d22c0c(arg0, arg1);
}

function __wbg_adapter_46(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9d5969264c6b9763(arg0, arg1, addHeapObject(arg2));
}

function __wbg_adapter_49(arg0, arg1, arg2) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfc3dc30b58234802(arg0, arg1, addHeapObject(arg2));
}

let cachedFloat32Memory0 = null;

function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_exn_store(addHeapObject(e));
    }
}

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}
function __wbg_adapter_315(arg0, arg1, arg2, arg3) {
    _assertNum(arg0);
    _assertNum(arg1);
    wasm.wasm_bindgen__convert__closures__invoke2_mut__h0206d9eaf5c1b344(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}

/**
*/
class EventLoopJs {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        const obj = Object.create(EventLoopJs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_eventloopjs_free(ptr);
    }
    /**
    * @returns {EventLoopJs}
    */
    static new() {
        const ret = wasm.eventloopjs_new();
        return EventLoopJs.__wrap(ret);
    }
}
/**
*/
class WaterfallGraph {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        const obj = Object.create(WaterfallGraph.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_waterfallgraph_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @param {number} data_length
    * @param {number} data_heigth_show
    * @param {string} element_id
    * @returns {WaterfallGraph}
    */
    static new(width, height, data_length, data_heigth_show, element_id) {
        _assertNum(width);
        _assertNum(height);
        _assertNum(data_length);
        _assertNum(data_heigth_show);
        const ptr0 = passStringToWasm0(element_id, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.waterfallgraph_new(width, height, data_length, data_heigth_show, ptr0, len0);
        return WaterfallGraph.__wrap(ret);
    }
    /**
    * @param {number} i
    * @param {number} min
    * @param {number} max
    * @returns {Float32Array}
    */
    debug_data(i, min, max) {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            _assertNum(i);
            wasm.waterfallgraph_debug_data(retptr, this.ptr, i, min, max);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @param {Float32Array} number
    * @returns {number}
    */
    add_data(number) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        const ptr0 = passArrayF32ToWasm0(number, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.waterfallgraph_add_data(this.ptr, ptr0, len0);
        return ret >>> 0;
    }
    /**
    * @param {number} position
    */
    set_slider_position(position) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertNum(position);
        wasm.waterfallgraph_set_slider_position(this.ptr, position);
    }
    /**
    * @returns {number}
    */
    get_slider_position() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        const ret = wasm.waterfallgraph_get_slider_position(this.ptr);
        return ret >>> 0;
    }
    /**
    * @returns {number | undefined}
    */
    get_mouse_value() {
        try {
            if (this.ptr == 0) throw new Error('Attempt to use a moved value');
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            _assertNum(this.ptr);
            wasm.waterfallgraph_get_mouse_value(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getFloat32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * @returns {Promise<void>}
    */
    run() {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        const ret = wasm.waterfallgraph_run(this.ptr);
        return takeObject(ret);
    }
}
/**
*/
class WebglGraph {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        const obj = Object.create(WebglGraph.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webglgraph_free(ptr);
    }
    /**
    * @param {number} width
    * @param {number} height
    * @returns {WebglGraph}
    */
    static new(width, height) {
        _assertNum(width);
        _assertNum(height);
        const ret = wasm.webglgraph_new(width, height);
        return WebglGraph.__wrap(ret);
    }
    /**
    * @param {Float32Array} number
    */
    load_data(number) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        const ptr0 = passArrayF32ToWasm0(number, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.webglgraph_load_data(this.ptr, ptr0, len0);
    }
    /**
    * @param {number} data_size
    * @param {number} min_value
    * @param {number} max_value
    * @param {number} precision
    * @returns {Promise<void>}
    */
    run(data_size, min_value, max_value, precision) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertNum(data_size);
        const ret = wasm.webglgraph_run(this.ptr, data_size, min_value, max_value, precision);
        return takeObject(ret);
    }
}
/**
*/
class WebgpuGraph {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webgpugraph_free(ptr);
    }
}
/**
*/
class WebgpuGraphJs {

    constructor() {
        throw new Error('cannot invoke `new` directly');
    }

    static __wrap(ptr) {
        const obj = Object.create(WebgpuGraphJs.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_webgpugraphjs_free(ptr);
    }
    /**
    * @param {EventLoopJs} event_loop_js
    * @param {number} width
    * @param {number} height
    * @returns {WebgpuGraphJs}
    */
    static New(event_loop_js, width, height) {
        _assertClass(event_loop_js, EventLoopJs);
        if (event_loop_js.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        _assertNum(width);
        _assertNum(height);
        const ret = wasm.webgpugraphjs_New(event_loop_js.ptr, width, height);
        return WebgpuGraphJs.__wrap(ret);
    }
    /**
    * @param {number} data_size
    * @param {number} min_value
    * @param {number} max_value
    * @param {number} precision
    * @returns {Promise<any>}
    */
    Init(data_size, min_value, max_value, precision) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertNum(data_size);
        const ret = wasm.webgpugraphjs_Init(this.ptr, data_size, min_value, max_value, precision);
        return takeObject(ret);
    }
    /**
    * @param {Float32Array} _numbers
    * @returns {Promise<any>}
    */
    UpdateTextureFromData(_numbers) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        const ptr0 = passArrayF32ToWasm0(_numbers, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.webgpugraphjs_UpdateTextureFromData(this.ptr, ptr0, len0);
        return takeObject(ret);
    }
    /**
    * @param {EventLoopJs} event_loop_js
    * @returns {Promise<void>}
    */
    Run(event_loop_js) {
        if (this.ptr == 0) throw new Error('Attempt to use a moved value');
        _assertNum(this.ptr);
        _assertClass(event_loop_js, EventLoopJs);
        if (event_loop_js.ptr === 0) {
            throw new Error('Attempt to use a moved value');
        }
        var ptr0 = event_loop_js.__destroy_into_raw();
        const ret = wasm.webgpugraphjs_Run(this.ptr, ptr0);
        return takeObject(ret);
    }
}

function __wbindgen_cb_drop(arg0) {
    const obj = takeObject(arg0).original;
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return true;
    }
    const ret = false;
    _assertBoolean(ret);
    return ret;
};

function __wbindgen_string_new(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

function __wbindgen_object_clone_ref(arg0) {
    const ret = getObject(arg0);
    return addHeapObject(ret);
};

function __wbg_error_f851667af71bcfc6() { return logError(function (arg0, arg1) {
    try {
        console.error(getStringFromWasm0(arg0, arg1));
    } finally {
        wasm.__wbindgen_free(arg0, arg1);
    }
}, arguments) };

function __wbg_new_abda76e883ba8a5f() { return logError(function () {
    const ret = new Error();
    return addHeapObject(ret);
}, arguments) };

function __wbg_stack_658279fe44541cf6() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).stack;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

function __wbindgen_object_drop_ref(arg0) {
    takeObject(arg0);
};

function __wbindgen_number_get(arg0, arg1) {
    const obj = getObject(arg1);
    const ret = typeof(obj) === 'number' ? obj : undefined;
    if (!isLikeNone(ret)) {
        _assertNum(ret);
    }
    getFloat64Memory0()[arg0 / 8 + 1] = isLikeNone(ret) ? 0 : ret;
    getInt32Memory0()[arg0 / 4 + 0] = !isLikeNone(ret);
};

function __wbg_instanceof_Window_e266f02eee43b570() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof Window;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_document_950215a728589a2d() { return logError(function (arg0) {
    const ret = getObject(arg0).document;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_navigator_b18e629f7f0b75fa() { return logError(function (arg0) {
    const ret = getObject(arg0).navigator;
    return addHeapObject(ret);
}, arguments) };

function __wbg_innerWidth_7e9d12e05bcb598e() { return handleError(function (arg0) {
    const ret = getObject(arg0).innerWidth;
    return addHeapObject(ret);
}, arguments) };

function __wbg_innerHeight_3ef25a30618357e0() { return handleError(function (arg0) {
    const ret = getObject(arg0).innerHeight;
    return addHeapObject(ret);
}, arguments) };

function __wbg_devicePixelRatio_5f8f5cab76864090() { return logError(function (arg0) {
    const ret = getObject(arg0).devicePixelRatio;
    return ret;
}, arguments) };

function __wbg_cancelAnimationFrame_d079cdb83bc43b26() { return handleError(function (arg0, arg1) {
    getObject(arg0).cancelAnimationFrame(arg1);
}, arguments) };

function __wbg_matchMedia_967e50e4289050fa() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_requestAnimationFrame_afe426b568f84138() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_get_e6ae480a4b8df368() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0)[getStringFromWasm0(arg1, arg2)];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_clearTimeout_b2b8af0f044e02e9() { return logError(function (arg0, arg1) {
    getObject(arg0).clearTimeout(arg1);
}, arguments) };

function __wbg_setTimeout_6609c9aa64f32bfc() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_fullscreenElement_65f14a4df7c25129() { return logError(function (arg0) {
    const ret = getObject(arg0).fullscreenElement;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_createElement_e2a0e21263eb5416() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_exitFullscreen_36506b10bd87f8b8() { return logError(function (arg0) {
    getObject(arg0).exitFullscreen();
}, arguments) };

function __wbg_getElementById_eb93a47327bb5585() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getElementById(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_querySelectorAll_608b5716e2a3baf0() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).querySelectorAll(getStringFromWasm0(arg1, arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_x_0938e87a3ff14a2e() { return logError(function (arg0) {
    const ret = getObject(arg0).x;
    return ret;
}, arguments) };

function __wbg_y_b881176a43492948() { return logError(function (arg0) {
    const ret = getObject(arg0).y;
    return ret;
}, arguments) };

function __wbg_setProperty_21e2e7868b86a93e() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

function __wbg_instanceof_GpuAdapter_6a21ec3028a6a633() { return logError(function (arg0) {
    let result;
    try {
        result = getObject(arg0) instanceof GPUAdapter;
    } catch {
        result = false;
    }
    const ret = result;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_requestDevice_98a881f5f37cbc1b() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).requestDevice(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_submit_145accdc4854b69b() { return logError(function (arg0, arg1) {
    getObject(arg0).submit(getObject(arg1));
}, arguments) };

function __wbg_writeTexture_a747d2eb64753216() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).writeTexture(getObject(arg1), getObject(arg2), getObject(arg3), getObject(arg4));
}, arguments) };

function __wbg_end_90bec30eeecaac54() { return logError(function (arg0) {
    getObject(arg0).end();
}, arguments) };

function __wbg_setBindGroup_799966434e921168() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2), getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
}, arguments) };

function __wbg_draw_da079c427d4e1307() { return logError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).draw(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0, arg4 >>> 0);
}, arguments) };

function __wbg_setPipeline_4b1f6ab51617f980() { return logError(function (arg0, arg1) {
    getObject(arg0).setPipeline(getObject(arg1));
}, arguments) };

function __wbg_deltaX_b7d127c94d6265c0() { return logError(function (arg0) {
    const ret = getObject(arg0).deltaX;
    return ret;
}, arguments) };

function __wbg_deltaY_b32fa858e16edcc0() { return logError(function (arg0) {
    const ret = getObject(arg0).deltaY;
    return ret;
}, arguments) };

function __wbg_deltaMode_11f7b19e64d9a515() { return logError(function (arg0) {
    const ret = getObject(arg0).deltaMode;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_clientX_35f23f953e04ec0e() { return logError(function (arg0) {
    const ret = getObject(arg0).clientX;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_clientY_8104e462abc0b3ec() { return logError(function (arg0) {
    const ret = getObject(arg0).clientY;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_offsetX_413d9f02022e72ad() { return logError(function (arg0) {
    const ret = getObject(arg0).offsetX;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_offsetY_488f80a0a9666028() { return logError(function (arg0) {
    const ret = getObject(arg0).offsetY;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_ctrlKey_e1b8f1de1eb24d5d() { return logError(function (arg0) {
    const ret = getObject(arg0).ctrlKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_shiftKey_fdd99b6df96e25c5() { return logError(function (arg0) {
    const ret = getObject(arg0).shiftKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_altKey_d531a4d3704557cb() { return logError(function (arg0) {
    const ret = getObject(arg0).altKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_metaKey_934772989e28020c() { return logError(function (arg0) {
    const ret = getObject(arg0).metaKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_button_a1c470d5e4c997f2() { return logError(function (arg0) {
    const ret = getObject(arg0).button;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_buttons_42a7b7de33d8e572() { return logError(function (arg0) {
    const ret = getObject(arg0).buttons;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_movementX_f4d07f6658c1e16f() { return logError(function (arg0) {
    const ret = getObject(arg0).movementX;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_movementY_30276c1f90aec4fa() { return logError(function (arg0) {
    const ret = getObject(arg0).movementY;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_queue_6b0eedcf46d47cbd() { return logError(function (arg0) {
    const ret = getObject(arg0).queue;
    return addHeapObject(ret);
}, arguments) };

function __wbg_createBindGroup_2a20ed419eb0c234() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createBindGroup(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createBindGroupLayout_d8f7eb1e6a48042e() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createBindGroupLayout(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createBuffer_7c429b6a1c19d86f() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createBuffer(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createCommandEncoder_16ef0a1822a74575() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createCommandEncoder(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createComputePipeline_9d9c4c1e7c177a43() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createComputePipeline(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createPipelineLayout_651e444b8d7b374a() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createPipelineLayout(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createRenderPipeline_adf9ebf96b9eb9b4() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createRenderPipeline(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createSampler_3246c59a5aeec1ce() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createSampler(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createShaderModule_58ad41a3299a4bb9() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createShaderModule(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createTexture_ea9e43be4047490d() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createTexture(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_createView_d0df6318b34e3b5d() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).createView(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_pointerId_d2caae4465ba386f() { return logError(function (arg0) {
    const ret = getObject(arg0).pointerId;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_pressure_352c13794490720b() { return logError(function (arg0) {
    const ret = getObject(arg0).pressure;
    return ret;
}, arguments) };

function __wbg_pointerType_df759fa0bd6634ed() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).pointerType;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

function __wbg_getBoundingClientRect_aaa701cbcb448965() { return logError(function (arg0) {
    const ret = getObject(arg0).getBoundingClientRect();
    return addHeapObject(ret);
}, arguments) };

function __wbg_requestFullscreen_4eee04b9090fa98a() { return handleError(function (arg0) {
    getObject(arg0).requestFullscreen();
}, arguments) };

function __wbg_setAttribute_79c9562d32d05e66() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
}, arguments) };

function __wbg_setPointerCapture_5479dc0d082282b7() { return handleError(function (arg0, arg1) {
    getObject(arg0).setPointerCapture(arg1);
}, arguments) };

function __wbg_getMappedRange_33ceebd7bbe29781() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getMappedRange(arg1, arg2);
    return addHeapObject(ret);
}, arguments) };

function __wbg_mapAsync_10d0f6703ef03e7b() { return logError(function (arg0, arg1, arg2, arg3) {
    const ret = getObject(arg0).mapAsync(arg1 >>> 0, arg2, arg3);
    return addHeapObject(ret);
}, arguments) };

function __wbg_unmap_ae21c65ca7ae9598() { return logError(function (arg0) {
    getObject(arg0).unmap();
}, arguments) };

function __wbg_label_9a9e9fc564518aa6() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).label;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

function __wbg_beginComputePass_3a26c65b3bbaff3f() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).beginComputePass(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_beginRenderPass_db57aa384a7aef06() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).beginRenderPass(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_copyBufferToBuffer_dfab33ec8c9e760e() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5) {
    getObject(arg0).copyBufferToBuffer(getObject(arg1), arg2, getObject(arg3), arg4, arg5);
}, arguments) };

function __wbg_finish_72c07625138235ea() { return logError(function (arg0) {
    const ret = getObject(arg0).finish();
    return addHeapObject(ret);
}, arguments) };

function __wbg_finish_e43769cf456060ff() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).finish(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_matches_46e979ff3e4d0811() { return logError(function (arg0) {
    const ret = getObject(arg0).matches;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_now_c644db5194be8437() { return logError(function (arg0) {
    const ret = getObject(arg0).now();
    return ret;
}, arguments) };

function __wbg_style_2141664e428fef46() { return logError(function (arg0) {
    const ret = getObject(arg0).style;
    return addHeapObject(ret);
}, arguments) };

function __wbg_debug_8db2eed1bf6c1e2a() { return logError(function (arg0) {
    console.debug(getObject(arg0));
}, arguments) };

function __wbg_error_fe807da27c4a4ced() { return logError(function (arg0) {
    console.error(getObject(arg0));
}, arguments) };

function __wbg_error_2d344a50ccf38b3b() { return logError(function (arg0, arg1) {
    console.error(getObject(arg0), getObject(arg1));
}, arguments) };

function __wbg_info_9e6db45ac337c3b5() { return logError(function (arg0) {
    console.info(getObject(arg0));
}, arguments) };

function __wbg_log_7bb108d119bafbc1() { return logError(function (arg0) {
    console.log(getObject(arg0));
}, arguments) };

function __wbg_warn_e57696dbb3977030() { return logError(function (arg0) {
    console.warn(getObject(arg0));
}, arguments) };

function __wbg_addEventListener_615d4590d38da1c9() { return handleError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
}, arguments) };

function __wbg_addEventListener_cf5b03cd29763277() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

function __wbg_removeEventListener_343e3ea9fe4c8533() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
    getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3), getObject(arg4));
}, arguments) };

function __wbg_configure_2eba1e396591bdd7() { return logError(function (arg0, arg1) {
    getObject(arg0).configure(getObject(arg1));
}, arguments) };

function __wbg_getCurrentTexture_0f26ea6da8c0f77c() { return logError(function (arg0) {
    const ret = getObject(arg0).getCurrentTexture();
    return addHeapObject(ret);
}, arguments) };

function __wbg_getBindGroupLayout_7478e25935b9d2e8() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).getBindGroupLayout(arg1 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_target_b629c177f9bee3da() { return logError(function (arg0) {
    const ret = getObject(arg0).target;
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_cancelBubble_c9a8182589205d54() { return logError(function (arg0) {
    const ret = getObject(arg0).cancelBubble;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_preventDefault_16b2170b12f56317() { return logError(function (arg0) {
    getObject(arg0).preventDefault();
}, arguments) };

function __wbg_stopPropagation_7647c9985222f9b0() { return logError(function (arg0) {
    getObject(arg0).stopPropagation();
}, arguments) };

function __wbg_dispatchWorkgroups_44644514248ca896() { return logError(function (arg0, arg1, arg2, arg3) {
    getObject(arg0).dispatchWorkgroups(arg1 >>> 0, arg2 >>> 0, arg3 >>> 0);
}, arguments) };

function __wbg_end_4f73dcb320797ca5() { return logError(function (arg0) {
    getObject(arg0).end();
}, arguments) };

function __wbg_setPipeline_c1c3fde5d44173c8() { return logError(function (arg0, arg1) {
    getObject(arg0).setPipeline(getObject(arg1));
}, arguments) };

function __wbg_setBindGroup_534bbf726e58dd0d() { return logError(function (arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    getObject(arg0).setBindGroup(arg1 >>> 0, getObject(arg2), getArrayU32FromWasm0(arg3, arg4), arg5, arg6 >>> 0);
}, arguments) };

function __wbg_width_a40e21a22129b197() { return logError(function (arg0) {
    const ret = getObject(arg0).width;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_setwidth_81c62bc806e0a727() { return logError(function (arg0, arg1) {
    getObject(arg0).width = arg1 >>> 0;
}, arguments) };

function __wbg_height_98d51321254345a5() { return logError(function (arg0) {
    const ret = getObject(arg0).height;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_setheight_98cf0db22c40ef07() { return logError(function (arg0, arg1) {
    getObject(arg0).height = arg1 >>> 0;
}, arguments) };

function __wbg_getContext_3ae404b649cf9287() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getContext(getStringFromWasm0(arg1, arg2));
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_get_8187c9b59091f3ad() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0)[arg1 >>> 0];
    return isLikeNone(ret) ? 0 : addHeapObject(ret);
}, arguments) };

function __wbg_charCode_504e79c3e550d1bb() { return logError(function (arg0) {
    const ret = getObject(arg0).charCode;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_keyCode_b33194be2ceec53b() { return logError(function (arg0) {
    const ret = getObject(arg0).keyCode;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_altKey_dff2a075455ac01b() { return logError(function (arg0) {
    const ret = getObject(arg0).altKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_ctrlKey_993b558f853d64ce() { return logError(function (arg0) {
    const ret = getObject(arg0).ctrlKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_shiftKey_31e62e9d172b26f0() { return logError(function (arg0) {
    const ret = getObject(arg0).shiftKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_metaKey_9f0f19692d0498bd() { return logError(function (arg0) {
    const ret = getObject(arg0).metaKey;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_key_f0decac219aa904b() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).key;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

function __wbg_code_aed21120de275a12() { return logError(function (arg0, arg1) {
    const ret = getObject(arg1).code;
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
}, arguments) };

function __wbg_getModifierState_03b72700dbe33ad6() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).getModifierState(getStringFromWasm0(arg1, arg2));
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_gpu_383beebfe7730ae8() { return logError(function (arg0) {
    const ret = getObject(arg0).gpu;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_number_new(arg0) {
    const ret = arg0;
    return addHeapObject(ret);
};

function __wbg_requestAdapter_1e9aee61dd467483() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).requestAdapter(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_matches_7b5ad9e6bb56f1f3() { return logError(function (arg0) {
    const ret = getObject(arg0).matches;
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_addListener_dfc3f9e430149b14() { return handleError(function (arg0, arg1) {
    getObject(arg0).addListener(getObject(arg1));
}, arguments) };

function __wbg_removeListener_6f811d2fb59768b9() { return handleError(function (arg0, arg1) {
    getObject(arg0).removeListener(getObject(arg1));
}, arguments) };

function __wbg_appendChild_b8199dc1655c852d() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).appendChild(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_b525de17f44a8943() { return logError(function () {
    const ret = new Array();
    return addHeapObject(ret);
}, arguments) };

function __wbg_push_49c286f04dd3bf59() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).push(getObject(arg1));
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_newnoargs_2b8b6bd7753c76ba() { return logError(function (arg0, arg1) {
    const ret = new Function(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_95d1ea488d03e4e8() { return handleError(function (arg0, arg1) {
    const ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_call_9495de66fdbe016b() { return handleError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).call(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_is_8f1618fe9a4fd388() { return logError(function (arg0, arg1) {
    const ret = Object.is(getObject(arg0), getObject(arg1));
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbg_new_f9876326328f45ed() { return logError(function () {
    const ret = new Object();
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_9d3a9ce4282a18a8() { return logError(function (arg0, arg1) {
    try {
        var state0 = {a: arg0, b: arg1};
        var cb0 = (arg0, arg1) => {
            const a = state0.a;
            state0.a = 0;
            try {
                return __wbg_adapter_315(a, state0.b, arg0, arg1);
            } finally {
                state0.a = a;
            }
        };
        const ret = new Promise(cb0);
        return addHeapObject(ret);
    } finally {
        state0.a = state0.b = 0;
    }
}, arguments) };

function __wbg_resolve_fd40f858d9db1a04() { return logError(function (arg0) {
    const ret = Promise.resolve(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

function __wbg_then_ec5db6d509eb475f() { return logError(function (arg0, arg1) {
    const ret = getObject(arg0).then(getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_then_f753623316e2873a() { return logError(function (arg0, arg1, arg2) {
    const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
    return addHeapObject(ret);
}, arguments) };

function __wbg_globalThis_87cbb8506fecf3a9() { return handleError(function () {
    const ret = globalThis.globalThis;
    return addHeapObject(ret);
}, arguments) };

function __wbg_self_e7c1f827057f6584() { return handleError(function () {
    const ret = self.self;
    return addHeapObject(ret);
}, arguments) };

function __wbg_window_a09ec664e14b1b81() { return handleError(function () {
    const ret = window.window;
    return addHeapObject(ret);
}, arguments) };

function __wbg_global_c85a9259e621f3db() { return handleError(function () {
    const ret = global.global;
    return addHeapObject(ret);
}, arguments) };

function __wbg_new_537b7341ce90bb31() { return logError(function (arg0) {
    const ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
}, arguments) };

function __wbg_newwithbyteoffsetandlength_9fb2f11355ecadf5() { return logError(function (arg0, arg1, arg2) {
    const ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
}, arguments) };

function __wbg_buffer_5f1fc856188c4b44() { return logError(function (arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
}, arguments) };

function __wbg_length_27a2afe8ab42b09f() { return logError(function (arg0) {
    const ret = getObject(arg0).length;
    _assertNum(ret);
    return ret;
}, arguments) };

function __wbg_set_17499e8aa4003ebd() { return logError(function (arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}, arguments) };

function __wbg_get_baf4855f9a986186() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(getObject(arg0), getObject(arg1));
    return addHeapObject(ret);
}, arguments) };

function __wbg_set_6aa458a4ebdb65cb() { return handleError(function (arg0, arg1, arg2) {
    const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
    _assertBoolean(ret);
    return ret;
}, arguments) };

function __wbindgen_is_undefined(arg0) {
    const ret = getObject(arg0) === undefined;
    _assertBoolean(ret);
    return ret;
};

function __wbg_buffer_cf65c07de34b9a08() { return logError(function (arg0) {
    const ret = getObject(arg0).buffer;
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_debug_string(arg0, arg1) {
    const ret = debugString(getObject(arg1));
    const ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

function __wbindgen_throw(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

function __wbindgen_memory() {
    const ret = wasm.memory;
    return addHeapObject(ret);
};

function __wbindgen_closure_wrapper1451() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 81, __wbg_adapter_22);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1453() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 93, __wbg_adapter_25);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1455() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 89, __wbg_adapter_28);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1457() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 87, __wbg_adapter_31);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1459() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 85, __wbg_adapter_34);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1461() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 83, __wbg_adapter_37);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1463() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 91, __wbg_adapter_40);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper1465() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 79, __wbg_adapter_43);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper3315() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 245, __wbg_adapter_46);
    return addHeapObject(ret);
}, arguments) };

function __wbindgen_closure_wrapper3772() { return logError(function (arg0, arg1, arg2) {
    const ret = makeMutClosure(arg0, arg1, 278, __wbg_adapter_49);
    return addHeapObject(ret);
}, arguments) };


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/spectral_graph/spectral_graph_bg.wasm":
/*!************************************************************!*\
  !*** ./node_modules/spectral_graph/spectral_graph_bg.wasm ***!
  \************************************************************/
/*! exports provided: memory, __wbg_waterfallgraph_free, waterfallgraph_new, waterfallgraph_debug_data, waterfallgraph_add_data, waterfallgraph_set_slider_position, waterfallgraph_get_slider_position, waterfallgraph_get_mouse_value, waterfallgraph_run, __wbg_eventloopjs_free, eventloopjs_new, __wbg_webgpugraphjs_free, webgpugraphjs_New, webgpugraphjs_Init, webgpugraphjs_UpdateTextureFromData, webgpugraphjs_Run, __wbg_webgpugraph_free, __wbg_webglgraph_free, webglgraph_new, webglgraph_load_data, webglgraph_run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h331b18429ece2b5a, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h470d8e903762cd12, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h18ae2b4b0ec29172, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha82c3aa3d81001f3, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__ha414af4736d618a3, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h215ab4f5ee299503, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h81b4117a85361edd, _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__heb98f5f875d22c0c, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h9d5969264c6b9763, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfc3dc30b58234802, __wbindgen_add_to_stack_pointer, __wbindgen_free, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__h0206d9eaf5c1b344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Instantiate WebAssembly module
var wasmExports = __webpack_require__.w[module.i];
__webpack_require__.r(exports);
// export exports from WebAssembly module
for(var name in wasmExports) if(name != "__webpack_init__") exports[name] = wasmExports[name];
// exec imports from WebAssembly module (for esm order)
/* harmony import */ var m0 = __webpack_require__(/*! ./spectral_graph_bg.js */ "./node_modules/spectral_graph/spectral_graph_bg.js");


// exec wasm module
wasmExports["__webpack_init__"]()

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ })

}]);
//# sourceMappingURL=0.bootstrap.js.map