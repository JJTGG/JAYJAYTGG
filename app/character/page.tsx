"use client";

import { useState } from "react";

type Pose = "idle" | "wave" | "laugh" | "curious" | "stretch";

const poses: { id: Pose; label: string }[] = [
  { id: "idle", label: "Wander" },
  { id: "wave", label: "Wave" },
  { id: "laugh", label: "Laugh" },
  { id: "curious", label: "Curious" },
  { id: "stretch", label: "Stretch" }
];

export default function TripJayPage() {
  const [pose, setPose] = useState<Pose>("idle");

  return (
    <main className="trip-page">
      <header className="trip-header">
        <div>
          <p className="trip-eyebrow">CHARACTER STUDY / 001</p>
          <h1>Trip. Jay</h1>
          <p className="trip-intro">
            Anime character prototype — movement and elasticity.
          </p>
        </div>

        <span className="trip-nameplate">TRIPLE JAY</span>
      </header>

      <section
        className="trip-stage"
        aria-label="Trip. Jay character stage"
      >
        <div className={`trip-figure pose-${pose}`}>
          <svg
            viewBox="0 0 600 760"
            role="img"
            aria-labelledby="trip-title trip-description"
          >
            <title id="trip-title">Trip. Jay</title>
            <desc id="trip-description">
              An anime character with a straw hat, black hair, a red vest,
              blue shorts, sandals and a scar beneath his left eye.
              He can wander, change expressions and stretch his arms.
            </desc>

            <defs>
              <linearGradient
                id="trip-skin"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#FFDEB9" />
                <stop offset="100%" stopColor="#ECA875" />
              </linearGradient>

              <linearGradient
                id="trip-straw"
                x1="0"
                y1="0"
                x2="0.8"
                y2="1"
              >
                <stop offset="0%" stopColor="#FFE59A" />
                <stop offset="100%" stopColor="#D6A94E" />
              </linearGradient>

              <linearGradient
                id="trip-red"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#F0443D" />
                <stop offset="100%" stopColor="#B91F2A" />
              </linearGradient>

              <linearGradient
                id="trip-blue"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#428BEA" />
                <stop offset="100%" stopColor="#1746A2" />
              </linearGradient>

              <linearGradient
                id="trip-hair"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#303036" />
                <stop offset="100%" stopColor="#090A0D" />
              </linearGradient>
            </defs>

            {/* Ground shadow */}
            <ellipse
              cx="300"
              cy="691"
              rx="122"
              ry="17"
              fill="#171918"
              opacity=".11"
            />

            {/* Legs and sandals */}
            <g
              stroke="#292321"
              strokeWidth="5"
              strokeLinejoin="round"
            >
              <g className="trip-leg-left">
                <path
                  d="M246 541 L257 637 Q272 650 289 639 L300 548Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M249 634 Q266 643 288 635 L300 649
                     Q302 660 287 667 L240 665
                     Q230 660 237 650Z"
                  fill="#68452E"
                />

                <path
                  d="M248 645 L270 658 L279 641"
                  fill="none"
                  stroke="#E3B66C"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <path
                  d="M239 663 Q267 671 291 662"
                  fill="none"
                  stroke="#E6D8C5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>

              <g className="trip-leg-right">
                <path
                  d="M301 548 L312 639 Q329 651 345 638 L354 541Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M310 635 Q329 644 349 633 L363 650
                     Q368 660 354 667 L308 665
                     Q298 660 302 649Z"
                  fill="#68452E"
                />

                <path
                  d="M316 642 L336 658 L348 641"
                  fill="none"
                  stroke="#E3B66C"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <path
                  d="M308 662 Q337 672 361 662"
                  fill="none"
                  stroke="#E6D8C5"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </g>
            </g>

            {/* Standard arms */}
            <g
              className="trip-standard-arms"
              stroke="#292321"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <g className="trip-arm-left">
                <path
                  d="M230 376 Q208 381 198 405 Q193 422 205 446
                     L216 480 Q220 493 231 488 Q242 485 237 472
                     L230 436 L251 409Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M214 472 Q200 482 208 494 Q215 502 226 495
                     L238 485 Q245 478 237 472"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M211 490 L218 479 M220 495 L229 484"
                  fill="none"
                  strokeWidth="3"
                />
              </g>

              <g className="trip-arm-right">
                <path
                  d="M370 376 Q392 381 402 405 Q407 422 395 446
                     L384 480 Q380 493 369 488 Q358 485 363 472
                     L370 436 L349 409Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M386 472 Q400 482 392 494 Q385 502 374 495
                     L362 485 Q355 478 363 472"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M389 490 L382 479 M380 495 L371 484"
                  fill="none"
                  strokeWidth="3"
                />
              </g>
            </g>

            {/* Luffy-style elastic arms.
                They replace the normal arms during Stretch mode. */}
            <g
              className="trip-stretch-arms"
              stroke="#292321"
              strokeWidth="5"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              <g className="trip-stretch-left">
                <path
                  d="M252 369
                     C232 359 214 369 195 381
                     C173 394 148 392 126 379
                     L105 367 L114 348 L137 360
                     C157 371 174 373 193 362
                     C214 347 234 354 260 365Z"
                  fill="url(#trip-skin)"
                />

                {/* Hand at the end of the stretched arm */}
                <path
                  d="M114 349
                     Q103 337 94 345
                     Q89 350 96 358
                     L83 357
                     Q72 358 75 368
                     Q77 375 89 374
                     L108 379 L120 365Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M92 361 L103 363"
                  fill="none"
                  strokeWidth="3"
                />
              </g>

              <g className="trip-stretch-right">
                <path
                  d="M348 369
                     C368 359 386 369 405 381
                     C427 394 452 392 474 379
                     L495 367 L486 348 L463 360
                     C443 371 426 373 407 362
                     C386 347 366 354 340 365Z"
                  fill="url(#trip-skin)"
                />

                {/* Hand at the end of the stretched arm */}
                <path
                  d="M486 349
                     Q497 337 506 345
                     Q511 350 504 358
                     L517 357
                     Q528 358 525 368
                     Q523 375 511 374
                     L492 379 L480 365Z"
                  fill="url(#trip-skin)"
                />

                <path
                  d="M508 361 L497 363"
                  fill="none"
                  strokeWidth="3"
                />
              </g>
            </g>

            {/* Neck */}
            <path
              d="M269 345 L265 385 Q300 407 335 385 L331 345Z"
              fill="url(#trip-skin)"
              stroke="#292321"
              strokeWidth="5"
              strokeLinejoin="round"
            />

            {/* Torso */}
            <g className="trip-torso">
              <path
                d="M249 369 Q276 361 300 370 Q324 361 351 369
                   L379 457 Q300 479 221 457Z"
                fill="url(#trip-skin)"
                stroke="#292321"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              {/* Vest panels */}
              <path
                d="M233 371 Q250 362 270 370 L289 466
                   Q257 465 224 457 Q215 411 233 371Z"
                fill="url(#trip-red)"
                stroke="#292321"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              <path
                d="M367 371 Q350 362 330 370 L311 466
                   Q343 465 376 457 Q385 411 367 371Z"
                fill="url(#trip-red)"
                stroke="#292321"
                strokeWidth="5"
                strokeLinejoin="round"
              />

              <path
                d="M247 380 L259 443 M353 380 L341 443"
                fill="none"
                stroke="#FF8B79"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d="M275 382 Q286 390 300 389 Q314 390 325 382"
                fill="none"
                stroke="#C78259"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <circle cx="275" cy="438" r="3.5" fill="#FFD5A9" />
              <circle cx="325" cy="438" r="3.5" fill="#FFD5A9" />
            </g>

            {/* Shorts */}
            <g stroke="#292321" strokeWidth="5" strokeLinejoin="round">
              <path
                d="M224 456 Q300 476 376 456
                   L366 550 Q334 566 307 551
                   L300 518 L293 551
                   Q262 566 234 550Z"
                fill="url(#trip-blue)"
              />

              <path
                d="M234 540 Q262 553 293 541 L294 553
                   Q265 570 235 558Z"
                fill="#EDE7DA"
              />

              <path
                d="M307 541 Q337 553 365 540 L365 558
                   Q337 570 308 553Z"
                fill="#EDE7DA"
              />

              <path
                d="M300 484 L300 518"
                fill="none"
                stroke="#163F86"
                strokeWidth="4"
              />
            </g>

            {/* Head rig */}
            <g className="trip-head-sway">
              <g className="trip-head-tilt">
                {/* Hair behind face */}
                <path
                  d="M223 240 Q204 218 214 191 L204 166 L233 178
                     L232 151 L260 174 L276 145 L297 166
                     L321 143 L336 174 L365 157 L362 185
                     L391 174 L379 208
                     Q398 234 378 275 L363 304 L238 304Z"
                  fill="url(#trip-hair)"
                  stroke="#171619"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Ears */}
                <ellipse
                  cx="222"
                  cy="265"
                  rx="17"
                  ry="25"
                  fill="url(#trip-skin)"
                  stroke="#292321"
                  strokeWidth="5"
                />

                <ellipse
                  cx="378"
                  cy="265"
                  rx="17"
                  ry="25"
                  fill="url(#trip-skin)"
                  stroke="#292321"
                  strokeWidth="5"
                />

                {/* Face */}
                <path
                  d="M225 204
                     Q230 168 267 161
                     Q300 151 333 161
                     Q370 168 375 204
                     L368 288
                     Q365 337 332 360
                     Q316 372 300 374
                     Q284 372 268 360
                     Q235 337 232 288Z"
                  fill="url(#trip-skin)"
                  stroke="#292321"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                {/* Cheeks */}
                <ellipse
                  cx="249"
                  cy="290"
                  rx="15"
                  ry="7"
                  fill="#E99B82"
                  opacity=".45"
                />

                <ellipse
                  cx="351"
                  cy="290"
                  rx="15"
                  ry="7"
                  fill="#E99B82"
                  opacity=".45"
                />

                {/* Eyebrows */}
                <path
                  className="trip-brow-left"
                  d="M247 230 Q263 218 280 229"
                  fill="none"
                  stroke="#171619"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                <path
                  className="trip-brow-right"
                  d="M321 229 Q338 217 354 230"
                  fill="none"
                  stroke="#171619"
                  strokeWidth="7"
                  strokeLinecap="round"
                />

                {/* Eyes */}
                <g className="trip-eye-left trip-blink">
                  <ellipse
                    cx="266"
                    cy="253"
                    rx="17"
                    ry="21"
                    fill="#FFFDF5"
                    stroke="#292321"
                    strokeWidth="4"
                  />

                  <g className="trip-pupil">
                    <ellipse
                      cx="269"
                      cy="255"
                      rx="8"
                      ry="12"
                      fill="#302820"
                    />
                    <ellipse
                      cx="272"
                      cy="250"
                      rx="3"
                      ry="4"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>

                <g className="trip-eye-right trip-blink">
                  <ellipse
                    cx="334"
                    cy="253"
                    rx="17"
                    ry="21"
                    fill="#FFFDF5"
                    stroke="#292321"
                    strokeWidth="4"
                  />

                  <g className="trip-pupil">
                    <ellipse
                      cx="337"
                      cy="255"
                      rx="8"
                      ry="12"
                      fill="#302820"
                    />
                    <ellipse
                      cx="340"
                      cy="250"
                      rx="3"
                      ry="4"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>

                {/* Nose */}
                <path
                  d="M300 258 Q295 279 301 285 Q306 288 312 282"
                  fill="none"
                  stroke="#AD704F"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <circle cx="300" cy="289" r="2.5" fill="#AD704F" />

                {/* Scar below the left eye */}
                <path
                  d="M343 280 L353 286 M345 288 L351 290"
                  fill="none"
                  stroke="#A43D37"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Default smile */}
                <g className="trip-mouth-closed">
                  <path
                    d="M258 318
                       Q300 339 342 318
                       Q331 352 300 353
                       Q269 352 258 318Z"
                    fill="#4A2526"
                    stroke="#292321"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />

                  <path
                    d="M268 324 Q300 338 332 324
                       L326 333 Q300 341 274 333Z"
                    fill="#FFF7E9"
                  />
                </g>

                {/* Laugh expression */}
                <g className="trip-mouth-open">
                  <ellipse
                    cx="300"
                    cy="334"
                    rx="29"
                    ry="24"
                    fill="#4A2526"
                    stroke="#292321"
                    strokeWidth="4"
                  />

                  <path
                    d="M278 328 Q300 336 322 328 L320 334
                       Q300 342 280 334Z"
                    fill="#FFF7E9"
                  />

                  <ellipse
                    cx="300"
                    cy="348"
                    rx="13"
                    ry="6"
                    fill="#E96C76"
                  />
                </g>

                {/* Hair fringe */}
                <path
                  d="M223 206 L238 169 L259 194 L270 166
                     L291 194 L308 166 L326 194 L350 171
                     L365 205 Q346 197 329 212
                     Q307 198 285 212 Q254 196 223 206Z"
                  fill="url(#trip-hair)"
                  stroke="#171619"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />

                {/* Straw hat */}
                <path
                  d="M209 143
                     Q210 77 251 48
                     Q273 33 300 35
                     Q327 33 349 48
                     Q390 77 391 143
                     Q300 158 209 143Z"
                  fill="url(#trip-straw)"
                  stroke="#60462C"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                <path
                  d="M243 71 Q300 48 357 71
                     M226 98 Q300 80 374 98"
                  fill="none"
                  stroke="#C39543"
                  strokeWidth="3"
                  opacity=".8"
                />

                {/* Red hat band */}
                <path
                  d="M211 119 Q300 139 389 119
                     L390 137 Q300 158 210 137Z"
                  fill="#C92832"
                  stroke="#78302B"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />

                {/* Brim */}
                <path
                  d="M137 144
                     Q188 124 245 135
                     Q300 143 355 135
                     Q412 124 463 144
                     Q451 168 400 173
                     Q300 182 200 173
                     Q149 168 137 144Z"
                  fill="url(#trip-straw)"
                  stroke="#60462C"
                  strokeWidth="5"
                  strokeLinejoin="round"
                />

                <path
                  d="M165 148 Q300 175 435 148"
                  fill="none"
                  stroke="#C39543"
                  strokeWidth="3"
                  opacity=".8"
                />
              </g>
            </g>
          </svg>
        </div>

        <span className="trip-stage-caption">TRIP. JAY</span>
      </section>

      <section className="trip-controls" aria-label="Character actions">
        <div className="trip-controls-heading">
          <h2>Character actions</h2>
          <p>
            Wander is the default. Choose another action to interrupt it.
          </p>
        </div>

        <div className="trip-pose-list">
          {poses.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`trip-pose-button ${
                pose === item.id ? "is-active" : ""
              }`}
              onClick={() => setPose(item.id)}
              aria-pressed={pose === item.id}
            >
              {item.label}
            </button>
          ))}
        </div>
      </section>

      <p className="trip-note">
        Idle mode lets Trip. Jay wander around the stage with a walking
        cycle. Stretch mode extends both arms and animates their elastic
        movement. Autonomous decisions and the building activity lock
        will be connected in the next character-system layer.
      </p>

      <style jsx>{`
        .trip-page {
          width: min(100% - 40px, 960px);
          margin: 0 auto;
          padding: clamp(32px, 7vw, 72px) 0 64px;
          color: var(--foreground);
        }

        .trip-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 28px;
        }

        .trip-eyebrow {
          margin: 0 0 10px;
          color: var(--accent);
          font-size: 11px;
          font-weight: 750;
          letter-spacing: .17em;
        }

        h1 {
          margin: 0;
          font-size: clamp(2.7rem, 8vw, 4.8rem);
          line-height: .98;
          letter-spacing: -.065em;
        }

        .trip-intro {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 15px;
        }

        .trip-nameplate {
          flex-shrink: 0;
          border: 1px solid var(--line);
          border-radius: 999px;
          padding: 7px 12px;
          color: var(--muted);
          font-size: 10px;
          font-weight: 750;
          letter-spacing: .13em;
        }

        .trip-stage {
          position: relative;
          display: grid;
          min-height: 560px;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
          container-type: inline-size;
          border: 1px solid var(--line);
          border-radius: 18px;
          background:
            radial-gradient(
              ellipse at 50% 36%,
              color-mix(in srgb, var(--accent) 7%, transparent),
              transparent 56%
            ),
            var(--surface);
        }

        .trip-stage::before {
          position: absolute;
          z-index: -1;
          top: 50%;
          left: 50%;
          width: min(72%, 420px);
          aspect-ratio: 1;
          border: 1px solid var(--line);
          border-radius: 50%;
          content: "";
          transform: translate(-50%, -50%);
          opacity: .55;
        }

        .trip-figure {
          --wander-distance: max(
            0px,
            calc((100cqi - min(78cqi, 510px)) / 2 - 8px)
          );
          --wander-left: calc(0px - var(--wander-distance));
          --wander-right: var(--wander-distance);

          position: relative;
          z-index: 1;
          width: min(78cqi, 510px);
          margin-top: 18px;
          transform-origin: center bottom;
        }

        .trip-figure svg {
          display: block;
          width: 100%;
          height: auto;
          overflow: visible;
        }

        /* Autonomous physical wandering while idle */
        .trip-figure.pose-idle {
          animation: trip-wander 17s ease-in-out infinite;
        }

        .trip-torso {
          transform-box: view-box;
          transform-origin: 300px 410px;
          animation: trip-breathe 3.2s ease-in-out infinite;
        }

        .trip-head-sway {
          transform-box: view-box;
          transform-origin: 300px 280px;
          animation: trip-head-idle 6s ease-in-out infinite;
        }

        .trip-head-tilt {
          transform-box: view-box;
          transform-origin: 300px 275px;
          transition: transform 260ms ease;
        }

        .pose-curious .trip-head-tilt {
          transform: rotate(8deg);
        }

        .pose-laugh .trip-head-tilt {
          transform: rotate(-5deg);
        }

        .trip-brow-right {
          transition: transform 240ms ease;
        }

        .pose-curious .trip-brow-right {
          transform: translateY(-4px) rotate(-8deg);
          transform-origin: 337px 226px;
        }

        /* Natural walking cycle */
        .trip-leg-left,
        .trip-leg-right,
        .trip-arm-left,
        .trip-arm-right {
          transform-box: view-box;
        }

        .pose-idle .trip-leg-left {
          transform-origin: 270px 540px;
          animation: trip-step-left 680ms ease-in-out infinite;
        }

        .pose-idle .trip-leg-right {
          transform-origin: 330px 540px;
          animation: trip-step-right 680ms ease-in-out infinite;
        }

        .pose-idle .trip-arm-left {
          transform-origin: 230px 379px;
          animation: trip-arm-left-step 680ms ease-in-out infinite;
        }

        .pose-idle .trip-arm-right {
          transform-origin: 370px 379px;
          animation: trip-arm-right-step 680ms ease-in-out infinite;
        }

        /* Regular blinking and looking around */
        .trip-blink {
          transform-box: fill-box;
          transform-origin: center;
          animation: trip-blink 5.2s infinite;
        }

        .trip-pupil {
          animation: trip-glance 7.5s ease-in-out infinite;
        }

        /* Default and laughing mouth */
        .trip-mouth-open {
          opacity: 0;
          transition: opacity 120ms ease;
        }

        .pose-laugh .trip-mouth-closed {
          opacity: 0;
        }

        .pose-laugh .trip-mouth-open {
          opacity: 1;
        }

        /* Stop ordinary limbs from showing during elastic movement */
        .trip-stretch-arms {
          display: none;
        }

        .pose-stretch .trip-standard-arms {
          visibility: hidden;
        }

        .pose-stretch .trip-stretch-arms {
          display: inline;
        }

        .trip-stretch-left {
          transform-box: view-box;
          transform-origin: 252px 369px;
          animation: trip-elastic-left 850ms ease-in-out infinite;
        }

        .trip-stretch-right {
          transform-box: view-box;
          transform-origin: 348px 369px;
          animation: trip-elastic-right 850ms ease-in-out infinite;
        }

        /* Wave the standard right arm */
        .pose-wave .trip-arm-right {
          transform-origin: 388px 392px;
          animation: trip-wave 850ms ease-in-out infinite;
        }

        .trip-stage-caption {
          position: absolute;
          right: 18px;
          bottom: 15px;
          color: var(--muted);
          font-size: 9px;
          font-weight: 750;
          letter-spacing: .2em;
        }

        .trip-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          margin-top: 24px;
          padding: 20px 0;
          border-bottom: 1px solid var(--line);
        }

        .trip-controls-heading h2 {
          margin: 0;
          font-size: 17px;
          letter-spacing: -.025em;
        }

        .trip-controls-heading p {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .trip-pose-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .trip-pose-button {
          min-height: 42px;
          border: 1px solid var(--line);
          border-radius: 8px;
          padding: 9px 14px;
          background: var(--surface);
          color: var(--foreground);
          font-size: 13px;
          font-weight: 650;
          transition:
            background 160ms ease,
            color 160ms ease,
            border-color 160ms ease,
            transform 160ms ease;
        }

        .trip-pose-button:hover {
          border-color: var(--accent);
          transform: translateY(-1px);
        }

        .trip-pose-button.is-active {
          border-color: var(--accent);
          background: var(--accent);
          color: #fff;
        }

        .trip-note {
          max-width: 660px;
          margin: 20px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.8;
        }

        @keyframes trip-wander {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          12% {
            transform: translate(var(--wander-right), -5px) rotate(2deg);
          }
          20% {
            transform: translate(var(--wander-right), 0) rotate(1deg);
          }
          35% {
            transform: translate(0, -8px) rotate(0deg);
          }
          49% {
            transform: translate(var(--wander-left), 0) rotate(-2deg);
          }
          57% {
            transform: translate(var(--wander-left), -3px) rotate(-1deg);
          }
          72% {
            transform: translate(0, 0) rotate(0deg);
          }
          86% {
            transform: translate(var(--wander-right), -4px) rotate(1deg);
          }
        }

        @keyframes trip-breathe {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.012); }
        }

        @keyframes trip-head-idle {
          0%, 100% { transform: rotate(0deg); }
          35% { transform: rotate(-1deg); }
          70% { transform: rotate(.7deg); }
        }

        @keyframes trip-step-left {
          0%, 100% { transform: rotate(2deg) translateY(0); }
          50% { transform: rotate(-2deg) translateY(-3px); }
        }

        @keyframes trip-step-right {
          0%, 100% { transform: rotate(-2deg) translateY(-3px); }
          50% { transform: rotate(2deg) translateY(0); }
        }

        @keyframes trip-arm-left-step {
          0%, 100% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
        }

        @keyframes trip-arm-right-step {
          0%, 100% { transform: rotate(4deg); }
          50% { transform: rotate(-4deg); }
        }

        @keyframes trip-blink {
          0%, 43%, 47%, 78%, 82%, 100% {
            transform: scaleY(1);
          }
          45%, 46%, 80%, 81% {
            transform: scaleY(.06);
          }
        }

        @keyframes trip-glance {
          0%, 57%, 100% { transform: translateX(0); }
          62%, 67% { transform: translateX(3px); }
          72%, 76% { transform: translateX(-2px); }
        }

        @keyframes trip-wave {
          0%, 100% { transform: rotate(-114deg); }
          35% { transform: rotate(-124deg); }
          70% { transform: rotate(-108deg); }
        }

        @keyframes trip-elastic-left {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.055); }
        }

        @keyframes trip-elastic-right {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(1.055); }
        }

        @media (max-width: 620px) {
          .trip-page {
            width: min(100% - 28px, 960px);
            padding-top: 36px;
          }

          .trip-header {
            align-items: start;
          }

          .trip-nameplate {
            margin-top: 5px;
            font-size: 9px;
          }

          .trip-stage {
            min-height: 450px;
          }

          .trip-controls {
            align-items: stretch;
            flex-direction: column;
            gap: 16px;
          }

          .trip-pose-list {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .trip-pose-button {
            padding: 9px 5px;
            font-size: 12px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trip-figure,
          .trip-torso,
          .trip-head-sway,
          .trip-blink,
          .trip-pupil,
          .trip-leg-left,
          .trip-leg-right,
          .trip-arm-left,
          .trip-arm-right,
          .trip-stretch-left,
          .trip-stretch-right {
            animation: none !important;
          }

          .trip-head-tilt,
          .trip-brow-right,
          .trip-mouth-open,
          .trip-pose-button {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  );
}