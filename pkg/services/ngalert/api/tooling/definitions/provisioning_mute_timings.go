package definitions

// swagger:route GET /api/provisioning/mute-timings provisioning RouteGetMuteTimings
//
// Get all the mute timings.
//
//     Responses:
//       200: []MuteTiming
//       400: ValidationError

// swagger:route GET /api/provisioning/mute-timings/{name} provisioning RouteGetMuteTiming
//
// Get a mute timing.
//
//     Responses:
//       200: MuteTiming
//       400: ValidationError
