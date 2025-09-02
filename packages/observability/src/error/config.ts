import { isProduction } from "@adel/utils/environment"

export const MONITORING_SAMPLE_RATE = isProduction ? 0.1 : 1
