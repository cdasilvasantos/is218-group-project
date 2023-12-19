// components/GoogleAnalytics.js
'use client';

import Script from 'next/script';
import {usePathname,useSearchParams} from 'next/navigation'
import { useEffect } from "react";
import {pageview} from '../lib/gtagHelper';
