(assert_return (invoke "f32.no_fold_lt_if_to_abs" (f32.const nan:0x200000)) (f32.const nan:0x200000))
(assert_return (invoke "f32.no_fold_lt_if_to_abs" (f32.const -nan)) (f32.const -nan))
(assert_return (invoke "f32.no_fold_lt_if_to_abs" (f32.const 0.0)) (f32.const 0.0))
(assert_return (invoke "f32.no_fold_lt_if_to_abs" (f32.const -0.0)) (f32.const -0.0))
(assert_return (invoke "f32.no_fold_le_if_to_abs" (f32.const nan:0x200000)) (f32.const nan:0x200000))
(assert_return (invoke "f32.no_fold_le_if_to_abs" (f32.const -nan)) (f32.const -nan))
(assert_return (invoke "f32.no_fold_le_if_to_abs" (f32.const 0.0)) (f32.const -0.0))
(assert_return (invoke "f32.no_fold_le_if_to_abs" (f32.const -0.0)) (f32.const 0.0))
(assert_return (invoke "f32.no_fold_gt_if_to_abs" (f32.const nan:0x200000)) (f32.const -nan:0x200000))
(assert_return (invoke "f32.no_fold_gt_if_to_abs" (f32.const -nan)) (f32.const nan))
(assert_return (invoke "f32.no_fold_gt_if_to_abs" (f32.const 0.0)) (f32.const -0.0))
(assert_return (invoke "f32.no_fold_gt_if_to_abs" (f32.const -0.0)) (f32.const 0.0))
(assert_return (invoke "f32.no_fold_ge_if_to_abs" (f32.const nan:0x200000)) (f32.const -nan:0x200000))
(assert_return (invoke "f32.no_fold_ge_if_to_abs" (f32.const -nan)) (f32.const nan))
(assert_return (invoke "f32.no_fold_ge_if_to_abs" (f32.const 0.0)) (f32.const 0.0))
(assert_return (invoke "f32.no_fold_ge_if_to_abs" (f32.const -0.0)) (f32.const -0.0))
(assert_return (invoke "f64.no_fold_lt_if_to_abs" (f64.const nan:0x4000000000000)) (f64.const nan:0x4000000000000))
(assert_return (invoke "f64.no_fold_lt_if_to_abs" (f64.const -nan)) (f64.const -nan))
(assert_return (invoke "f64.no_fold_lt_if_to_abs" (f64.const 0.0)) (f64.const 0.0))
(assert_return (invoke "f64.no_fold_lt_if_to_abs" (f64.const -0.0)) (f64.const -0.0))
(assert_return (invoke "f64.no_fold_le_if_to_abs" (f64.const nan:0x4000000000000)) (f64.const nan:0x4000000000000))
(assert_return (invoke "f64.no_fold_le_if_to_abs" (f64.const -nan)) (f64.const -nan))
(assert_return (invoke "f64.no_fold_le_if_to_abs" (f64.const 0.0)) (f64.const -0.0))
(assert_return (invoke "f64.no_fold_le_if_to_abs" (f64.const -0.0)) (f64.const 0.0))
(assert_return (invoke "f64.no_fold_gt_if_to_abs" (f64.const nan:0x4000000000000)) (f64.const -nan:0x4000000000000))
(assert_return (invoke "f64.no_fold_gt_if_to_abs" (f64.const -nan)) (f64.const nan))
(assert_return (invoke "f64.no_fold_gt_if_to_abs" (f64.const 0.0)) (f64.const -0.0))
(assert_return (invoke "f64.no_fold_gt_if_to_abs" (f64.const -0.0)) (f64.const 0.0))
(assert_return (invoke "f64.no_fold_ge_if_to_abs" (f64.const nan:0x4000000000000)) (f64.const -nan:0x4000000000000))
(assert_return (invoke "f64.no_fold_ge_if_to_abs" (f64.const -nan)) (f64.const nan))
(assert_return (invoke "f64.no_fold_ge_if_to_abs" (f64.const 0.0)) (f64.const 0.0))
(assert_return (invoke "f64.no_fold_ge_if_to_abs" (f64.const -0.0)) (f64.const -0.0))


