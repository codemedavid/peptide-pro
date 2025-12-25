-- Insert Tirzepatide 15mg COA Report
-- Run this in your Supabase SQL Editor

INSERT INTO coa_reports (
  product_name,
  batch,
  test_date,
  purity_percentage,
  quantity,
  task_number,
  verification_key,
  image_url,
  featured,
  manufacturer,
  laboratory
) VALUES (
  'Tirzepatide 15mg',
  'TR15PEPTIFY2026-001',
  '2025-12-03',
  99.936,
  '16.28mg',
  '30154',
  'PEPTIFYLUB48',
  '/coa/tirzepatide-15mg-coa-30154.jpg',
  true,
  'PeptidePro by PeptifyPh',
  'Chromate'
);

-- Verify the insert
SELECT * FROM coa_reports WHERE task_number = '30154';
