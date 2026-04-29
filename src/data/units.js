export const units = [
  {
   "id":"unit1",
   "title":"The Pyramid of the Mind",
   "subtitle":"Desert Pyramids",
   "theme":"desert",
   "emoji": "U1",
   "description":"Five sealed chambers built around conditioning and learning. Pavlov's ghost is somewhere in here.",
   "intro":"Scholars of behavior sealed this pyramid centuries ago. Five chambers, five sets of questions. Get them right and the doors open. Get them wrong and the sand comes in.",
   "winText":"The final seal breaks. Desert light cuts through the dust and hits your face. Five relics in your pack and a solid grasp of learning theory in your head.",
   "chamberStartBg":"/images/unit1/chamber-start.jpg",
   "chamberEndBg":"/images/unit1/chamber-end.jpg",
   "chambers": [
      {
       "id":"u1-c1",
       "title":"Chamber I - The Antechamber of Observation",
       "intro":"Torchlight hits the stone walls — rats, dogs, pigeons, all carved in relief and watching. This chamber covers how learning is studied in the lab.",
       "background":"/images/unit1/chamber-1.jpg",
       "questions": [
          {
           "id":"u1-c1-q1",
           "text":"According to your course, studying learning involves three core operations. Which of the following is NOT one of them?",
           "answers": [
              {
               "text":"Present a stimulus to build a representation",
               "correct": false
              },
              {
               "text":"Arrange a relationship between two stimuli",
               "correct": false
              },
              {
               "text":"Arrange a relationship between behavior and a stimulus",
               "correct": false
              },
              {
               "text":"Measure the neural firing rate of individual neurons",
               "correct": true
              }
            ],
           "wrongStory":"A section of the floor crumbles — sand pours in from below. The pyramid is displeased with your answer.",
           "explanation":"The three operations are: (1) present a stimulus, (2) arrange a relationship between two stimuli, and (3) arrange a relationship between behavior and a stimulus. Measuring neural firing rates is a technique, not one of the defining operations of studying learning."
          },
          {
           "id":"u1-c1-q2",
           "text":"In Pavlovian (classical) conditioning, the organism's role is best described as:",
           "answers": [
              {
               "text":"Active — behaviors are reinforced by consequences",
               "correct": false
              },
              {
               "text":"Passive — the organism has no role at all",
               "correct": false
              },
              {
               "text":"Passive — associations form through stimulus pairings without required behavior",
               "correct": true
              },
              {
               "text":"Active — the organism must press a lever to receive the US",
               "correct": false
              }
            ],
           "wrongStory":"A stone slab drops an inch. You feel the pressure.",
           "explanation":"Pavlovian conditioning is passive: the organism doesn't need to do anything. The association forms between stimuli (CS and US) regardless of behavior. This contrasts with operant/instrumental conditioning, where behavior is required."
          },
          {
           "id":"u1-c1-q3",
           "text":"Why are rats commonly used in learning research?",
           "answers": [
              {
               "text":"They are the easiest animals to train",
               "correct": false
              },
              {
               "text":"They are mammals with a short enough lifespan to observe full development within a few years",
               "correct": true
              },
              {
               "text":"They have the largest brains relative to body size among mammals",
               "correct": false
              },
              {
               "text":"They are the only animals capable of operant conditioning",
               "correct": false
              }
            ],
           "wrongStory":"A scorpion skitters across your boot. Keep your wits.",
           "explanation":"Rats are used because they are mammals (like humans, making generalization more valid) and have a short lifespan that allows researchers to observe full growth and developmental changes across a reasonable timeframe."
          },
          {
           "id":"u1-c1-q4",
           "text":"In a T1-T2 design, what is the purpose of the T2 common test?",
           "answers": [
              {
               "text":"To introduce a new stimulus the subject has never seen",
               "correct": false
              },
              {
               "text":"To give all groups the same experience so behavioral differences reflect prior learning",
               "correct": true
              },
              {
               "text":"To vary the intensity of the US across groups",
               "correct": false
              },
              {
               "text":"To eliminate the need for a control group",
               "correct": false
              }
            ],
           "wrongStory":"Dust falls from the ceiling. The pyramid grows impatient.",
           "explanation":"The T2 common test is given to all groups so any behavioral differences observed at T2 can be attributed to what happened at T1 (learning), not to differences in the test itself. Without a common test, you cannot isolate learning as the cause."
          },
          {
           "id":"u1-c1-q5",
           "text":"The food imprinting study with snapping turtles showed that each group preferred the diet they had eaten during T1. What does this most directly demonstrate?",
           "answers": [
              {
               "text":"Turtles have a genetic preference for their natal diet",
               "correct": false
              },
              {
               "text":"The turtles learned about the taste, texture, and appearance of their food — encoding a representation of S1",
               "correct": true
              },
              {
               "text":"Turtles cannot distinguish between meat, fish, and worms",
               "correct": false
              },
              {
               "text":"Food imprinting only works if testing occurs within 24 hours of feeding",
               "correct": false
              }
            ],
           "wrongStory":"The ankh remains just out of reach. The wall carving of the turtle turns away.",
           "explanation":"The turtles showed preference for their specific T1 diet, which means they had encoded a representation of that stimulus during T1 and used it to guide behavior at T2 — a clear demonstration of stimulus representation learning."
          }
        ],
       "relic": {
         "name":"Bronze Ankh of Operations",
         "icon": "ANKH",
         "description":"Three symbols mark stimulus, relation, and response.",
         "clearText":"A hidden alcove opens and the Bronze Ankh hums in your palm."
        }
      },
      {
       "id":"u1-c2",
       "title":"Chamber II - Hall of Conditioned Tolerance",
       "intro":"The hall smells of old medicine. Something is pre-empting your every move. Context cues and compensatory responses block the door forward.",
       "background":"/images/unit1/chamber-2.jpg",
       "questions": [
          {
           "id":"u1-c2-q1",
           "text":"Siegel's (1975) research on morphine tolerance proposed that tolerance is:",
           "answers": [
              {
               "text":"Purely pharmacological — the liver metabolizes the drug faster over time",
               "correct": false
              },
              {
               "text":"Conditioned — the environment and contextual cues elicit a compensatory response that counteracts the drug",
               "correct": true
              },
              {
               "text":"Caused by receptor downregulation only, with no learning component",
               "correct": false
              },
              {
               "text":"Unrelated to environmental context",
               "correct": false
              }
            ],
           "wrongStory":"The morphine vials on the wall shatter. Sand hisses through the cracks.",
           "explanation":"Siegel argued that tolerance is a conditioned compensatory response. The body associates the context (room, stimuli) with drug delivery and pre-emptively counteracts the drug effect. In a novel context, this compensation doesn't occur — explaining overdoses in unfamiliar environments."
          },
          {
           "id":"u1-c2-q2",
           "text":"Based on Siegel's work, why might a person be more likely to overdose on a drug when using it in an unfamiliar location?",
           "answers": [
              {
               "text":"The drug's potency is chemically higher in unfamiliar rooms",
               "correct": false
              },
              {
               "text":"The conditioned compensatory response fails to occur because the usual contextual cues are absent",
               "correct": true
              },
              {
               "text":"The person forgets to take their usual dosage",
               "correct": false
              },
              {
               "text":"Unfamiliar environments increase heart rate, causing faster drug absorption",
               "correct": false
              }
            ],
           "wrongStory":"The floor hisses. You feel slightly unsteady. Context matters here too.",
           "explanation":"The conditioned compensatory response is cued by context. In a new environment, those contextual cues are missing, so the body doesn't mount its usual compensatory response, making the same dose more powerful — and potentially fatal."
          },
          {
           "id":"u1-c2-q3",
           "text":"In the Preference for Signaled Shock experiment, animals preferred a light that signaled when shock COULD occur but not a tone that signaled the shock was IMMINENT. This demonstrates:",
           "answers": [
              {
               "text":"Animals prefer higher-intensity stimuli in all cases",
               "correct": false
              },
              {
               "text":"Animals prefer warning signals that provide a \"safety period\" rather than immediate danger signals ✓",
               "correct": true
              },
              {
               "text":"Animals cannot distinguish between lights and tones",
               "correct": false
              },
              {
               "text":"Operant conditioning overrides classical conditioning at all times",
               "correct": false
              }
            ],
           "wrongStory":"A low tone echoes. Your pulse quickens. You know what comes next.",
           "explanation":"The light signals when shock is possible — giving the animal a \"safety signal\" during other periods. The tone signals the shock is about to happen immediately, providing no safety period. Animals prefer the signal that tells them when they are safe."
          },
          {
           "id":"u1-c2-q4",
           "text":"The Case of the Missing Towels (Ayllon, 1963) involved a schizophrenia patient who hoarded towels. The solution was to give her massive quantities of towels. This procedure is called:",
           "answers": [
              {
               "text":"Extinction by prevention",
               "correct": false
              },
              {
               "text":"Stimulus satiation",
               "correct": true
              },
              {
               "text":"Positive punishment",
               "correct": false
              },
              {
               "text":"Negative reinforcement",
               "correct": false
              }
            ],
           "wrongStory":"A towel drops from the ceiling. Then another. They keep coming.",
           "explanation":"Stimulus satiation involves flooding the subject with so much of the desired stimulus that it becomes aversive or loses its reinforcing value. After receiving 625 towels, the patient began discarding them spontaneously — the towels were no longer rewarding."
          },
          {
           "id":"u1-c2-q5",
           "text":"What was the key design flaw in the Stimulus Intensity Classic Study that Davis and Wagner later corrected?",
           "answers": [
              {
               "text":"They used cats instead of rats",
               "correct": false
              },
              {
               "text":"They never conducted a T2 common test — all groups received different final stimuli, making comparisons meaningless",
               "correct": true
              },
              {
               "text":"They failed to measure physiological responses",
               "correct": false
              },
              {
               "text":"They used too many trials, causing ceiling effects",
               "correct": false
              }
            ],
           "wrongStory":"The carved cat on the wall turns its back on you. The measurement was flawed.",
           "explanation":"The classic study never gave all groups a common T2 test. Each group ended at a different point on an ordinal scale, and since behavior is not an interval scale, comparing changes across those groups was not valid. Davis and Wagner fixed this with a proper T2 design."
          }
        ],
       "relic": {
         "name":"Silver Syringe of Tolerance",
         "icon": "SYR",
         "description":"Context conditions the body before the drug arrives. The syringe holds that principle.",
         "clearText":"The second seal yields and a silver syringe appears from the wall."
        }
      },
      {
       "id":"u1-c3",
       "title":"Chamber III - The Vault of Habituation",
       "intro":"The same tone plays again. And again. The response it used to trigger is fading. This vault asks why — and what timing has to do with it.",
       "background":"/images/unit1/chamber-3.jpg",
       "questions": [
          {
           "id":"u1-c3-q1",
           "text":"Davis and Wagner's Experiment 1 on acoustic startle response found that, with a proper T2 test, habituation was STRONGEST for which stimulus intensity?",
           "answers": [
              {
               "text":"The weakest (mild) stimulus",
               "correct": false
              },
              {
               "text":"The middle-intensity stimulus",
               "correct": false
              },
              {
               "text":"The strongest (intense) stimulus",
               "correct": true
              },
              {
               "text":"All intensities produced identical habituation",
               "correct": false
              }
            ],
           "wrongStory":"A great gong sounds from within the pyramid. The sound barely registers to you now.",
           "explanation":"With a proper T2 design, Davis and Wagner found the opposite of what the classic study claimed: the strongest stimulus produced the most habituation. This replaced the prior literature — strong stimuli habituate better."
          },
          {
           "id":"u1-c3-q2",
           "text":"In Groves and Thompson's Dual Process Theory, what is the \"state system\"?",
           "answers": [
              {
               "text":"The specific S-R pathway that decays with habituation",
               "correct": false
              },
              {
               "text":"The system responsible for sensitization — raising the overall responsiveness to all stimuli",
               "correct": true
              },
              {
               "text":"The system that converts short-term memories to long-term memories",
               "correct": false
              },
              {
               "text":"The autonomic nervous system response to pain",
               "correct": false
              }
            ],
           "wrongStory":"A spider drops from the ceiling beside you. You jump. Everything feels more intense now.",
           "explanation":"The state system underlies sensitization: a strong stimulus raises overall arousal/responsiveness, amplifying responses to all other stimuli regardless of whether they've been habituated. It is distinct from the S-R pathway (habituation system), which is stimulus-specific."
          },
          {
           "id":"u1-c3-q3",
           "text":"Which of the following correctly states the relationship between inter-stimulus interval (ISI) and habituation, as revealed by the properly designed re-evaluation study?",
           "answers": [
              {
               "text":"Shorter ISI produces more habituation",
               "correct": false
              },
              {
               "text":"Longer ISI produces more habituation because the stimulus representation has time to consolidate into LTM",
               "correct": true
              },
              {
               "text":"ISI has no effect on habituation",
               "correct": false
              },
              {
               "text":"Shorter ISI produces more sensitization and less habituation simultaneously",
               "correct": false
              }
            ],
           "wrongStory":"The torch flickers and dims. Familiarity is earned through time, not repetition.",
           "explanation":"The properly designed re-evaluation found that longer ISIs (more spacing) produce better habituation. This aligns with Wagner's Memory Model: longer ISIs allow the trace to consolidate into LTM, so the stimulus is recognized as expected when encountered again."
          },
          {
           "id":"u1-c3-q4",
           "text":"Dishabituation occurs when a previously habituated response returns after a novel stimulus is introduced. Groves and Thompson explain this by saying the novel stimulus:",
           "answers": [
              {
               "text":"Erases the S-R pathway, forcing the animal to relearn",
               "correct": false
              },
              {
               "text":"Activates the state system (sensitization), temporarily amplifying all responses",
               "correct": true
              },
              {
               "text":"Creates a new CS-US association that competes with the old one",
               "correct": false
              },
              {
               "text":"Directly modifies the US representation in LTM",
               "correct": false
              }
            ],
           "wrongStory":"A bright flash of light fills the room. Your heart pounds. You're on high alert.",
           "explanation":"G&T explain dishabituation via the state system: a novel stimulus triggers sensitization, which boosts the overall response level temporarily — including to the previously habituated stimulus. Habituation remains in the S-R pathway; it's the state system that temporarily masks it."
          },
          {
           "id":"u1-c3-q5",
           "text":"Honey (2000) tested whether habituation is context-specific. What did his results show, and which theory does this support?",
           "answers": [
              {
               "text":"Habituation transferred across contexts, supporting Groves and Thompson",
               "correct": false
              },
              {
               "text":"Habituation was context-specific — stimuli habituated in one context were less habituated in a new context, supporting Wagner's Memory Model",
               "correct": true
              },
              {
               "text":"Context had no effect on habituation at all",
               "correct": false
              },
              {
               "text":"Context only mattered for sensitization, not habituation",
               "correct": false
              }
            ],
           "wrongStory":"The chamber around you shifts. You feel lost. Familiar things feel strange in new places.",
           "explanation":"Honey found that habituation is context-specific: animals showed more habituation to a stimulus in the context they'd been trained in. This supports Wagner's model (context primes retrieval of the stimulus representation, making it expected) and contradicts G&T, which predicts context-independence."
          }
        ],
       "relic": {
         "name":"Jade Tablet of Intensity",
         "icon": "TAB",
         "description":"Both processes engraved in stone: habituation on one face, sensitization on the other.",
         "clearText":"The vault opens. A jade tablet rises from a stone pedestal."
        }
      },
      {
       "id":"u1-c4",
       "title":"Chamber IV - The Memory Sanctum",
       "intro":"Short-term memory orbs drift and flicker. Long-term ones glow steady. Wagner's rule: only surprising stimuli get fully processed. Expected ones barely register.",
       "background":"/images/unit1/chamber-4.jpg",
       "questions": [
          {
           "id":"u1-c4-q1",
           "text":"According to Wagner's Memory Model, a stimulus only elicits a response if:",
           "answers": [
              {
               "text":"It is above a certain physical intensity threshold",
               "correct": false
              },
              {
               "text":"Its representation is absent from short-term memory (STM) — i.e., it is surprising",
               "correct": true
              },
              {
               "text":"It has been paired with a US at least 10 times",
               "correct": false
              },
              {
               "text":"It is presented in exactly the same context as during initial training",
               "correct": false
              }
            ],
           "wrongStory":"An orb flickers. You were not surprised — but the pyramid was not impressed.",
           "explanation":"Wagner's key assumption: only surprising stimuli (those not already represented in STM) elicit responses and produce learning. If the stimulus is already primed in STM (expected), it is not surprising and produces little response or learning."
          },
          {
           "id":"u1-c4-q2",
           "text":"In Pavlovian conditioning, what is the unconditioned stimulus (US)?",
           "answers": [
              {
               "text":"A neutral stimulus that gains meaning through training",
               "correct": false
              },
              {
               "text":"A stimulus that elicits a response without any prior training",
               "correct": true
              },
              {
               "text":"The learned response that is evoked by the CS",
               "correct": false
              },
              {
               "text":"The stimulus that is used to extinguish a conditioned response",
               "correct": false
              }
            ],
           "wrongStory":"Pavlov's golden dog stares at you. The bell did not ring for you.",
           "explanation":"The US is a biologically meaningful stimulus (e.g., food, shock) that naturally and automatically elicits a response (the UR) without any learning required. It is the \"unconditional\" anchor of all classical conditioning."
          },
          {
           "id":"u1-c4-q3",
           "text":"What does \"spontaneous recovery\" demonstrate in the context of Pavlovian extinction?",
           "answers": [
              {
               "text":"Extinction permanently erases the CS-US association",
               "correct": false
              },
              {
               "text":"The CS-US association survived extinction and can return after a rest period",
               "correct": true
              },
              {
               "text":"Spontaneous recovery only occurs in operant, not classical conditioning",
               "correct": false
              },
              {
               "text":"The UR becomes stronger after extinction",
               "correct": false
              }
            ],
           "wrongStory":"The dog turns away. The bell rings faintly in the dark, then fades.",
           "explanation":"Spontaneous recovery — the return of the CR after a rest period following extinction — shows that extinction does not erase the original CS-US association. It inhibits it. Pavlov saw this as proof that the original learning survives."
          },
          {
           "id":"u1-c4-q4",
           "text":"Kamin's blocking experiment demonstrated that conditioning to a noise \"blocked\" learning about a light. What does this tell us about Pavlov's principle of temporal contiguity?",
           "answers": [
              {
               "text":"It confirms that temporal contiguity is sufficient for conditioning",
               "correct": false
              },
              {
               "text":"It proves that contiguity alone is not sufficient — prior associations interfere with new ones",
               "correct": true
              },
              {
               "text":"It shows that lights are always less salient than sounds",
               "correct": false
              },
              {
               "text":"Blocking only occurs in rats, not other species",
               "correct": false
              }
            ],
           "wrongStory":"The noise booms through the chamber. The light appears — but means nothing. You were too late.",
           "explanation":"Blocking directly contradicts Pavlov's contiguity principle. The light and shock were contiguous (co-occurring) in phase 2, yet no conditioning to the light occurred. Prior conditioning to the noise meant the shock was already predicted — the light added no new information."
          },
          {
           "id":"u1-c4-q5",
           "text":"Rescorla's contingency experiment varied the probability of shock during vs. outside the CS (tone). What happened in the \"zero contingency\" group, where P(shock|tone) = P(shock|no tone)?",
           "answers": [
              {
               "text":"Strong excitatory conditioning occurred because shocks were still paired with the tone",
               "correct": false
              },
              {
               "text":"No conditioning occurred — the tone provided no predictive information",
               "correct": true
              },
              {
               "text":"Conditioned inhibition developed to the tone",
               "correct": false
              },
              {
               "text":"The animals showed strong sensitization but no associative learning",
               "correct": false
              }
            ],
           "wrongStory":"The tone plays. Nothing happens. It plays again. Nothing. The pyramid is unmoved by coincidence.",
           "explanation":"In the zero contingency group, shock was equally likely whether the tone was on or off, so the tone predicted nothing. Despite many tone-shock pairings (contiguity), no conditioning occurred. Learning requires contingency (predictive value), not just contiguity."
          }
        ],
       "relic": {
         "name":"Golden Orb of Wagner",
         "icon": "ORB",
         "description":"What's already in short-term memory doesn't get processed again. The orb holds that rule.",
         "clearText":"The sanctum fractures and a golden orb settles into your hand."
        }
      },
      {
       "id":"u1-c5",
       "title":"Chamber V - The Inner Sanctum of Pavlov",
       "intro":"The innermost chamber. Bells and hieroglyphs cover every wall. Conditioning models and conditioned inhibition are the only way through.",
       "background":"/images/unit1/chamber-5.jpg",
       "questions": [
          {
           "id":"u1-c5-q1",
           "text":"In the Rescorla-Wagner model, what does lambda (λ) represent?",
           "answers": [
              {
               "text":"The salience of the CS",
               "correct": false
              },
              {
               "text":"The current associative strength of the CS",
               "correct": false
              },
              {
               "text":"The asymptote of learning — the maximum association strength supported by the US",
               "correct": true
              },
              {
               "text":"The inter-trial interval between conditioning trials",
               "correct": false
              }
            ],
           "wrongStory":"You've reached the ceiling — but you don't know what it is. The model eludes you.",
           "explanation":"Lambda is the asymptote — the maximum associative strength the US can support. When the summed associative strength of all present CSs equals lambda, no further learning occurs (the prediction error is zero)."
          },
          {
           "id":"u1-c5-q2",
           "text":"What novel phenomenon does the Rescorla-Wagner model predict when two fully trained excitors A and B are suddenly presented together as a compound AB+?",
           "answers": [
              {
               "text":"Their combined strength adds normally and no change occurs",
               "correct": false
              },
              {
               "text":"Overexpectation — the combined strength exceeds lambda, so conditioning to both A and B decreases",
               "correct": true
              },
              {
               "text":"Blocking — A prevents any new learning about B",
               "correct": false
              },
              {
               "text":"The model predicts no compound conditioning is possible",
               "correct": false
              }
            ],
           "wrongStory":"You expected too much. The pyramid adjusts your expectations downward.",
           "explanation":"Overexpectation: if VA = λ and VB = λ, then Vsum = 2λ when presented together — twice the asymptote. Since λ − Vsum is negative, both VA and VB must decrease until Vsum = λ. Individually, A and B then each produce less fear."
          },
          {
           "id":"u1-c5-q3",
           "text":"Conditioned inhibition explains three features of extinction. Which of the following is NOT one of those three features?",
           "answers": [
              {
               "text":"Spontaneous recovery after a rest period",
               "correct": false
              },
              {
               "text":"Disinhibition when a novel stimulus is introduced",
               "correct": false
              },
              {
               "text":"Faster reacquisition (savings) upon retraining",
               "correct": false
              },
              {
               "text":"The organism completely forgetting the CS-US association",
               "correct": true
              }
            ],
           "wrongStory":"The inhibitory glyph on the wall flares. You confused forgetting with suppression.",
           "explanation":"Conditioned inhibition explains: (1) spontaneous recovery — the inhibitor weakens over time; (2) disinhibition — a novel stimulus disrupts inhibition; (3) savings — inhibition is easier to overcome than building from scratch. Complete forgetting of the CS-US association is not part of the conditioned inhibition explanation."
          },
          {
           "id":"u1-c5-q4",
           "text":"In Pavlov's A+, AX− procedure, what does stimulus X become, and how is this verified?",
           "answers": [
              {
               "text":"X becomes a second excitor, verified by showing it independently produces a CR",
               "correct": false
              },
              {
               "text":"X becomes a conditioned inhibitor, verified by the summation test (BX < B) and retardation of acquisition test (X+ learned slower than neutral stimulus Y+)",
               "correct": true
              },
              {
               "text":"X becomes neutral, verified by the absence of any response",
               "correct": false
              },
              {
               "text":"X becomes a higher-order CS, verified by pairing it with a third stimulus",
               "correct": false
              }
            ],
           "wrongStory":"The inhibitor is present. You did not recognize it. The excitor fires, unimpeded.",
           "explanation":"X becomes a conditioned inhibitor — it predicts the omission of the US. This is verified by two tests: the summation test (X reduces responding to a known excitor B, so BX < B) and retardation of acquisition (X is harder to turn into an excitor than a neutral stimulus Y, because the inhibitory association must first be undone)."
          },
          {
           "id":"u1-c5-q5",
           "text":"Research has shown that the conditioned inhibitor (CI) acts on which representation to reduce conditioned responding?",
           "answers": [
              {
               "text":"Directly on the CS representation, preventing the CS from being processed",
               "correct": false
              },
              {
               "text":"Directly on the CS-US connection, weakening the link between them",
               "correct": false
              },
              {
               "text":"On the US representation — inhibiting the expectation of the unconditioned stimulus itself",
               "correct": true
              },
              {
               "text":"On the CR motor pathway, blocking the behavioral output",
               "correct": false
              }
            ],
           "wrongStory":"The US flickers. The inhibitor is everywhere. It acts deeper than you thought.",
           "explanation":"Evidence shows the CI acts on the US representation — it inhibits the expected representation of the US itself. Because it reduces responding to ANY excitor (not just A), it cannot be acting on A's representation or the A-US connection specifically. It broadly suppresses US expectation."
          }
        ],
       "relic": {
         "name":"Pharaoh's Bell",
         "icon": "BELL",
         "description":"It rings. You expect something. That's the whole mechanism.",
         "clearText":"The final desert chamber falls silent. Pharaoh's Bell begins to ring."
        }
      }
    ]
  },
  {
   "id":"unit2",
   "title":"The Haunted House of Consequence",
   "subtitle":"Haunted House",
   "theme":"haunted",
   "emoji": "U2",
   "description":"Hargrove Mansion. Every hallway runs on consequences. Every habit was shaped by something that happened in here.",
   "intro":"A dare brought you into Hargrove Mansion. The front door locked behind you. Every room runs on operant logic. Learn the contingencies or become part of the house.",
   "winText":"The EXIT door opens to cold night air. You leave with hard-earned relics and the knowledge that extinction covers learning but does not erase it.",
   "chamberStartBg":"/images/unit2/chamber-start.jpg",
   "chamberEndBg":"",
   "chambers": [
      {
       "id":"u2-c1",
       "title":"Chamber I - The Parlor of Thorndike",
       "intro":"Puzzle boxes and taxidermied animals line the parlor walls. Thorndike was here first. This room covers the law of effect and the core ABA consequences.",
       "background":"/images/unit2/chamber-1.jpg",
       "questions": [
          {
           "id":"u2-c1-q1",
           "text":"Thorndike placed hungry cats in a puzzle box with food just outside. What pattern did he observe over repeated trials?",
           "answers": [
              {
               "text":"Cats had a sudden insight moment where they understood the box mechanism",
               "correct": false
              },
              {
               "text":"Escape times stayed the same across all trials — cats never improved",
               "correct": false
              },
              {
               "text":"Escape latency decreased gradually through trial-and-error, with no sudden moment of understanding",
               "correct": true
              },
              {
               "text":"Cats learned to escape by watching other cats succeed first",
               "correct": false
              }
            ],
           "wrongStory":"The taxidermied cat in the glass case slowly turns its head toward you. Its glass eyes catch the candlelight. There was no Eureka moment in that box — only slow, grinding consequence.",
           "explanation":"Thorndike observed no \"Eureka!\" moment. Escape latency dropped gradually over trials as the accidentally successful behavior was reinforced. This was trial-and-error learning, not reasoning or insight."
          },
          {
           "id":"u2-c1-q2",
           "text":"Thorndike's Law of Effect states:",
           "answers": [
              {
               "text":"The more times a behavior is practiced, the stronger it becomes regardless of outcome",
               "correct": false
              },
              {
               "text":"Animals learn behaviors by observing the consequences experienced by others",
               "correct": false
              },
              {
               "text":"Behavior followed by satisfying consequences is strengthened; behavior followed by annoying consequences is weakened",
               "correct": true
              },
              {
               "text":"All learned behaviors eventually extinguish without constant repetition",
               "correct": false
              }
            ],
           "wrongStory":"The fireplace ignites on its own — cold blue flame, no heat. The armchair nearest you scrapes an inch closer across the floor. The house runs on consequences. You just demonstrated the wrong one.",
           "explanation":"The Law of Effect says satisfying outcomes strengthen the S-R association while annoying outcomes weaken it. Reinforcement is what drives behavior — not insight, not goals, just consequences."
          },
          {
           "id":"u2-c1-q3",
           "text":"In ABA terminology, which combination correctly defines \"negative punishment\"?",
           "answers": [
              {
               "text":"Response causes stimulus to be presented; response rate increases",
               "correct": false
              },
              {
               "text":"Response causes stimulus to be presented; response rate decreases",
               "correct": false
              },
              {
               "text":"Response causes stimulus to be removed; response rate increases",
               "correct": false
              },
              {
               "text":"Response causes stimulus to be removed; response rate decreases",
               "correct": true
              }
            ],
           "wrongStory":"The candle on the mantle blows out. You are now in near-total darkness. Negative means something was taken. Punishment means you'll do that less. The house just demonstrated it on you.",
           "explanation":"Negative = stimulus is removed. Punishment = response rate decreases. Negative punishment means removing something desirable following a behavior, causing that behavior to occur less often."
          },
          {
           "id":"u2-c1-q4",
           "text":"\"Escape learning\" and \"avoidance learning\" are both examples of negative reinforcement. What is the key difference between them?",
           "answers": [
              {
               "text":"Escape learning increases response rate; avoidance learning decreases it",
               "correct": false
              },
              {
               "text":"Escape learning uses positive stimuli; avoidance learning uses aversive ones",
               "correct": false
              },
              {
               "text":"Escape learning terminates an ongoing aversive stimulus; avoidance learning prevents the aversive stimulus from occurring at all",
               "correct": true
              },
              {
               "text":"There is no meaningful difference — they are the same procedure with different names",
               "correct": false
              }
            ],
           "wrongStory":"Something cold wraps around your ankle. You thrash free of it — that was escape. Had you learned to avoid that corner of the room entirely, you'd never have felt it. You felt it. You learned the hard way.",
           "explanation":"In escape learning, the animal performs a behavior to stop something aversive already happening. In avoidance learning, the animal learns to act before the aversive event occurs, preventing it entirely."
          },
          {
           "id":"u2-c1-q5",
           "text":"Why might using punishment to stop a dog from urinating in the wrong location backfire?",
           "answers": [
              {
               "text":"Punishment always increases the frequency of any behavior it follows",
               "correct": false
              },
              {
               "text":"Dogs are incapable of forming S-R associations through punishment",
               "correct": false
              },
              {
               "text":"The dog may associate the punishment with the owner rather than the behavior, becoming afraid to urinate near the owner at all",
               "correct": true
              },
              {
               "text":"Punishment only works if delivered more than 30 minutes after the behavior",
               "correct": false
              }
            ],
           "wrongStory":"A portrait on the parlor wall shifts — the painted figure now faces away from you, cowering in the corner of its frame. It doesn't know what it did wrong. It only knows that something in this room is dangerous. That's the problem with misdirected punishment.",
           "explanation":"Punishment requires the animal to correctly identify which behavior caused the aversive outcome. If the dog associates the punishment with the owner rather than the urinating behavior, fear of the owner develops instead of suppression of the unwanted behavior."
          }
        ],
       "relic": {
         "name":"Brass Lever of Thorndike",
         "icon": "LEV",
         "description":"Pulled from a puzzle box. Consequences built this lever one trial at a time.",
         "clearText":"Wax seals crack and a brass lever drops into your hand."
        }
      },
      {
       "id":"u2-c2",
       "title":"Chamber II - The Nursery of Shaping",
       "intro":"A music box clicks in the corner. Painted panels mark each step toward a behavior that hasn't happened yet. This room covers shaping and what makes a reinforcer work.",
       "background":"/images/unit2/chamber-2.jpg",
       "questions": [
          {
           "id":"u2-c2-q1",
           "text":"Shaping is used to teach behaviors not currently in the subject's repertoire. What is the correct definition?",
           "answers": [
              {
               "text":"Presenting the full target behavior as a model for the subject to imitate",
               "correct": false
              },
              {
               "text":"Punishing all behaviors that deviate from the target until only the correct one remains",
               "correct": false
              },
              {
               "text":"Systematically and differentially reinforcing successive approximations toward a target behavior",
               "correct": true
              },
              {
               "text":"Waiting for the target behavior to occur spontaneously, then reinforcing it once",
               "correct": false
              }
            ],
           "wrongStory":"The painted figure on the nursery wall freezes at frame one and never advances. The gold stars above the later frames go dark. You can't skip the steps — you can't wait for the whole behavior to appear fully formed either. Each approximation must be earned.",
           "explanation":"Shaping requires reinforcing progressively closer approximations to the target behavior. \"Differentially\" means only the current best approximation is reinforced. \"Successively\" means the standard keeps shifting toward the goal."
          },
          {
           "id":"u2-c2-q2",
           "text":"What is the correct order of the five steps of shaping?",
           "answers": [
              {
               "text":"Select reinforcer → Specify target → Reinforce approximate behavior → Specify small steps → Increase requirement",
               "correct": false
              },
              {
               "text":"Reinforce approximate behavior → Specify target → Select reinforcer → Increase requirement → Specify small steps",
               "correct": false
              },
              {
               "text":"Specify target behavior → Specify small steps → Select reinforcer → Reinforce approximate behavior → Increase requirement",
               "correct": true
              },
              {
               "text":"Specify small steps → Reinforce approximate behavior → Specify target → Select reinforcer → Increase requirement",
               "correct": false
              }
            ],
           "wrongStory":"The alphabet blocks on the floor scramble themselves into a meaningless jumble. You hear the rocking horse creak faster — agitated. Without knowing where you're going and how you'll get there, the shaping process collapses into chaos.",
           "explanation":"You must know your destination first (target behavior), then plan the route (small steps), then select your fuel (reinforcer), then begin rewarding (reinforce approximate behavior), and finally raise the bar incrementally (increase requirement)."
          },
          {
           "id":"u2-c2-q3",
           "text":"A trainer uses a clicker rather than food to mark correct behavior. Why does the click function as a reinforcer?",
           "answers": [
              {
               "text":"The click is an unconditioned reinforcer because all animals respond naturally to sharp sounds",
               "correct": false
              },
              {
               "text":"The animal is negatively reinforced by the silence that follows the click",
               "correct": false
              },
              {
               "text":"The clicker has been paired with food through Pavlovian conditioning, making it a secondary (conditioned) reinforcer",
               "correct": true
              },
              {
               "text":"Clicks work because they startle the animal into attention, boosting alertness during learning",
               "correct": false
              }
            ],
           "wrongStory":"The music box on the shelf clicks once — then silence. No food follows. The rocking horse slows to a stop. A secondary reinforcer is only as powerful as the primary one it was built on. Without the pairing, the click is just a sound in a haunted nursery.",
           "explanation":"A secondary reinforcer acquires its power by being paired with a primary reinforcer like food. The clicker becomes a CS; food is the US. Its advantage is precision — it can mark the exact moment of the correct behavior, before food can even be fumbled out of a pocket."
          },
          {
           "id":"u2-c2-q4",
           "text":"In Wolf et al. (1964), Dicky was shaped to wear medically necessary glasses. Which combination of operant procedures was used?",
           "answers": [
              {
               "text":"Positive punishment for not wearing glasses; negative punishment for wearing them",
               "correct": false
              },
              {
               "text":"Negative reinforcement for wearing glasses; positive punishment for throwing them",
               "correct": false
              },
              {
               "text":"Positive reinforcement (food rewards) for wearing glasses; negative punishment (timeout) for removing or throwing them",
               "correct": true
              },
              {
               "text":"Shaping was not used — Dicky simply received praise after wearing glasses for a full day immediately",
               "correct": false
              }
            ],
           "wrongStory":"A child-sized rocking chair in the corner begins rocking on its own — faster and faster. The glasses sitting on the seat get thrown to the floor. You got the contingencies inverted. Reinforcement increases behavior. Punishment decreases it. Don't cross the wires in a haunted house.",
           "explanation":"Dicky received positive reinforcement (food) for wearing glasses, and negative punishment (removal from the activity — timeout) for throwing or removing them. Shaping was central: he was first reinforced just for touching the frames, then progressively for more complete wearing."
          },
          {
           "id":"u2-c2-q5",
           "text":"Why might the timeout room have functioned as negative reinforcement for Dicky rather than punishment?",
           "answers": [
              {
               "text":"Dicky liked timeout because he received candy there",
               "correct": false
              },
              {
               "text":"Timeout only functions as punishment in children older than 5",
               "correct": false
              },
              {
               "text":"If the training environment was aversive, being sent to timeout meant escaping something worse — making throwing glasses a reinforced escape behavior",
               "correct": true
              },
              {
               "text":"Negative reinforcement cannot occur in children who are nonverbal",
               "correct": false
              }
            ],
           "wrongStory":"The nursery door swings open to reveal a softly lit hallway — warm, quiet, nothing expected of you. You feel the pull of it immediately. If this room is more frightening than the hallway, leaving isn't punishment. It's relief. You just taught yourself to misbehave.",
           "explanation":"Negative reinforcement strengthens behavior by removing something aversive. If Dicky found the training environment more unpleasant than the timeout room, then throwing glasses → escape from training became a negatively reinforced behavior — increasing glass-throwing rather than decreasing it."
          }
        ],
       "relic": {
         "name":"Gilded Clicker",
         "icon": "CLK",
         "description":"A secondary reinforcer forged through precise pairing.",
         "clearText":"Padlocks snap open. The Gilded Clicker rises from the floor."
        }
      },
      {
       "id":"u2-c3",
       "title":"Chamber III - The Study of Outcomes",
       "intro":"The bookshelves are stacked with studies about what animals actually know when they press a lever. Habits versus goals. The room will make you pick a side.",
       "background":"/images/unit2/chamber-3.jpg",
       "questions": [
          {
           "id":"u2-c3-q1",
           "text":"Tinklepaugh (1928) secretly replaced an expected banana with lettuce while a monkey watched the cup being baited. What happened and what does it challenge?",
           "answers": [
              {
               "text":"The monkey ate the lettuce without issue — proving animals do not encode specific outcomes",
               "correct": false
              },
              {
               "text":"The monkey ignored the cup entirely, showing the association had extinguished",
               "correct": false
              },
              {
               "text":"The monkey showed visible agitation and searched for the banana, challenging S-R theory's claim that outcomes are not encoded",
               "correct": true
              },
              {
               "text":"The monkey pressed a lever, demonstrating that operant behavior overrode its expectation",
               "correct": false
              }
            ],
           "wrongStory":"The oil lamp on the desk flickers. In the glass dome, the two food dishes swap contents silently. The monkey in your mind reaches under the cup and recoils — something was taken. S-R theory says it wouldn't care. It cared deeply.",
           "explanation":"The monkey's agitation and searching showed it had formed a specific expectation of the outcome. S-R theory predicts no behavioral difference since outcomes aren't encoded — but the monkey clearly knew what it had been promised. This is expectancy violation."
          },
          {
           "id":"u2-c3-q2",
           "text":"Crespi (1942) shifted groups of rats to the same reward magnitude after training on different magnitudes. What were the depression and elation effects?",
           "answers": [
              {
               "text":"Rats shifted to fewer pellets ran faster; rats shifted to more pellets ran slower",
               "correct": false
              },
              {
               "text":"Both groups converged to the same speed immediately, as S-R theory predicts",
               "correct": false
              },
              {
               "text":"Rats shifted down ran slower than controls always on the small reward; rats shifted up ran faster than controls always on the large reward",
               "correct": true
              },
              {
               "text":"The effects appeared only on the first shift trial and vanished completely after three sessions",
               "correct": false
              }
            ],
           "wrongStory":"The chalkboard behind the desk erases itself. The ghost of a disappointed rat drags its feet across the floorboard above you — slow, sullen, robbed of what it expected. The house knows the difference between getting what you deserve and getting what you were promised.",
           "explanation":"Depression and elation effects show animals have expectations about reward magnitude. When reality violates expectation, behavior shifts beyond what S-R predicts. Disappointed rats run slower than rats who were never promised more. Elated rats run faster than those who were never promised less."
          },
          {
           "id":"u2-c3-q3",
           "text":"Colwill and Rescorla (1985) used outcome devaluation to test R-O encoding. What was the design?",
           "answers": [
              {
               "text":"Train R1 and R2 for the same outcome; devalue one response; test which response decreases",
               "correct": false
              },
              {
               "text":"Train R1→O1 and R2→O2; devalue O1 by pairing with sickness; test whether R1 specifically decreases",
               "correct": true
              },
              {
               "text":"Train R1→O1; extinguish R1; test whether spontaneous recovery reveals R-O encoding",
               "correct": false
              },
              {
               "text":"Train R1→O1; then train R2→O1; devalue O1; test whether both responses decrease equally",
               "correct": false
              }
            ],
           "wrongStory":"Both levers in the glass dome glow red simultaneously. That is what S-R theory predicts — the rat doesn't know what it's working for, so both levers suffer equally. But only one lever should dim. The rat knows exactly which one leads where.",
           "explanation":"By training R1→O1 and R2→O2, then devaluing O1 alone (pairing it with illness), researchers tested whether R1 specifically would decrease. It did. This proves R-O encoding: the animal knows which behavior leads to which outcome and adjusts accordingly."
          },
          {
           "id":"u2-c3-q4",
           "text":"Klossek et al. (2008) tested goal-directed behavior in children of different ages using cartoon icon pressing and outcome devaluation. What was the critical age-related finding?",
           "answers": [
              {
               "text":"All age groups showed identical goal-directed behavior after devaluation",
               "correct": false
              },
              {
               "text":"Younger children were more goal-directed; older children had already formed habits",
               "correct": false
              },
              {
               "text":"Three-year-olds reduced responding to the devalued cartoon; one-year-olds responded equally to both — suggesting habit learning in younger children",
               "correct": true
              },
              {
               "text":"No age group was sensitive to outcome devaluation — all children behaved like habit learners",
               "correct": false
              }
            ],
           "wrongStory":"Two portraits hang on the study wall — a toddler and a three-year-old. The toddler keeps pressing the same button over and over regardless of what comes out. The three-year-old pauses, considers, and presses the other one. The house recognizes the difference. Do you?",
           "explanation":"Three-year-olds showed outcome devaluation sensitivity — they pressed the devalued cartoon's icon less. One-year-olds pressed both equally, suggesting habitual S-R behavior. Goal-directed R-O learning appears to emerge between ages two and three."
          },
          {
           "id":"u2-c3-q5",
           "text":"The outcome-mediated transfer study found animals performed R1 during S1 and R2 during S2, despite S and R never being directly paired. What does this prove?",
           "answers": [
              {
               "text":"Animals form direct S-R associations even when S and R were never presented together",
               "correct": false
              },
              {
               "text":"The result is explained by generalization — S1 and S2 were not distinct enough",
               "correct": false
              },
              {
               "text":"Animals encode outcome identity — S1 activates the O1 representation, which selects R1, proving S-O and R-O associations without any direct S-R link",
               "correct": true
              },
              {
               "text":"Discriminative stimuli suppress competing responses rather than activating specific ones",
               "correct": false
              }
            ],
           "wrongStory":"The oil lamp sputters. Two books fall from the shelves — one labeled S1, one labeled R1. They were never on the same shelf. They were never shelved together. Yet something connected them. The outcome was the bridge, invisible but real, running beneath the floorboards of this study.",
           "explanation":"Because S1 and R1 were never directly paired — only linked through their shared association with O1 — the transfer of responding proves outcome identity encoding. The animal uses O1 as a mental bridge. This is powerful evidence for S-O and R-O associations over simple S-R theory."
          }
        ],
       "relic": {
         "name":"Stone Banana of Expectancy",
         "icon": "BAN",
         "description":"The monkey knew it was supposed to be a banana. This is the evidence.",
         "clearText":"The study dome lifts and a carved stone banana appears."
        }
      },
      {
       "id":"u2-c4",
       "title":"Chamber IV - The Basement of Choice",
       "intro":"A pendulum ticks through the delay values. Two levers wait in opposite corners. This room is about how organisms choose — matching, discounting, and what actually drives behavior.",
       "background":"/images/unit2/chamber-4.jpg",
       "questions": [
          {
           "id":"u2-c4-q1",
           "text":"Herrnstein's Matching Law describes how organisms distribute behavior across two options. What does it predict?",
           "answers": [
              {
               "text":"Animals always choose the option with the highest single reinforcement rate, ignoring alternatives entirely",
               "correct": false
              },
              {
               "text":"Animals randomly distribute behavior between options regardless of reinforcement rates",
               "correct": false
              },
              {
               "text":"The proportion of responses on an option matches the proportion of total reinforcement earned from that option",
               "correct": true
              },
              {
               "text":"Animals will always prefer variable ratio schedules and switch to them whenever available",
               "correct": false
              }
            ],
           "wrongStory":"One of the iron levers slams down on its own — the basement commits entirely to one side. That would be maximizing, not matching. The pendulum keeps swinging evenly. The law is about proportion, not domination.",
           "explanation":"The Matching Law states B1/(B1+B2) = R1/(R1+R2). Responding is distributed proportionally to relative reinforcement rate. If the left lever produces 75% of total reinforcements, roughly 75% of responses will go there."
          },
          {
           "id":"u2-c4-q2",
           "text":"In the delay discounting formula v = V / (1 + kD), what does a high k value represent?",
           "answers": [
              {
               "text":"The individual is highly patient and strongly values future rewards",
               "correct": false
              },
              {
               "text":"The individual discounts rewards very slowly, preferring delayed large rewards",
               "correct": false
              },
              {
               "text":"The individual steeply devalues delayed rewards — a high k means strong impulsivity",
               "correct": true
              },
              {
               "text":"The k value determines the maximum reward size, not discounting rate",
               "correct": false
              }
            ],
           "wrongStory":"The pendulum swings past the \"5 minutes\" mark on the clock face. You feel the reward in the iron chest losing its pull with every swing. A high k means every tick of that pendulum costs you more than it should. The chest isn't getting smaller — your patience is.",
           "explanation":"In v = V / (1 + kD), a high k makes the denominator grow rapidly with delay, causing v to drop steeply. High-k individuals place far less value on future rewards — associated with addiction, gambling, and impulsive behavior."
          },
          {
           "id":"u2-c4-q3",
           "text":"Why is the \"+1\" present in the delay discounting formula v = V / (1 + kD)?",
           "answers": [
              {
               "text":"It represents the baseline effort cost of obtaining any reward",
               "correct": false
              },
              {
               "text":"It ensures the formula only applies to delayed rewards, not immediate ones",
               "correct": false
              },
              {
               "text":"Without it, a reward with zero delay would require dividing by zero; and small k values could make delayed rewards appear more valuable than their actual worth",
               "correct": true
              },
              {
               "text":"It is a statistical correction for individual differences in baseline reward sensitivity",
               "correct": false
              }
            ],
           "wrongStory":"The clock face flickers to \"zero delay.\" The formula breaks. The denominator vanishes. The pendulum swings through the wall and disappears. Without the 1, the math collapses when there is no wait — and becomes absurd when k is tiny. The 1 keeps the house standing.",
           "explanation":"The +1 ensures (1) that when D = 0, v = V — the reward is worth its full value with no delay; and (2) prevents v from exceeding V when k is very small, which would nonsensically mean waiting makes the reward more valuable."
          },
          {
           "id":"u2-c4-q4",
           "text":"In Mitchell and Stoffelmayr (1973), what was the high-probability behavior used as a reinforcer for schizophrenia patients under the Premack Principle?",
           "answers": [
              {
               "text":"Watching television",
               "correct": false
              },
              {
               "text":"Eating candy or cigarettes",
               "correct": false
              },
              {
               "text":"Sitting quietly on a bench",
               "correct": true
              },
              {
               "text":"Walking freely around the hospital ward",
               "correct": false
              }
            ],
           "wrongStory":"The iron chest in the corner rattles — inside, you can hear the sound of a chair scraping against a floor. Not candy. Not television. The most powerful reward for these patients was the simplest, most passive thing in the world. The Premack Principle doesn't care how glamorous the reinforcer is — only how probable.",
           "explanation":"Patients were unmotivated by traditional rewards. Researchers identified sitting quietly as their highest-probability behavior and made it contingent on completing wire-stripping work. This proved reinforcement is relative — any HPB can reinforce any LPB, even doing nothing."
          },
          {
           "id":"u2-c4-q5",
           "text":"In the Lepper, Greene & Nisbett overjustification study, which group of children showed the sharpest decline in later drawing behavior?",
           "answers": [
              {
               "text":"The unexpected reward group — they were confused by receiving an unearned medal",
               "correct": false
              },
              {
               "text":"The no-reward group — they felt excluded and became disinterested",
               "correct": false
              },
              {
               "text":"The expected reward group — promised a medal before drawing, they shifted motivation from enjoyment to external gain",
               "correct": true
              },
              {
               "text":"All three groups declined equally — any reward undermines intrinsic motivation",
               "correct": false
              }
            ],
           "wrongStory":"A child's crayon rolls across the basement floor and stops at your feet. On the wall, a medal hangs on a nail above an empty drawing easel. The drawing stopped when the medal was promised before it started. Now there is no medal — and no drawing. The basement remembers what you said you'd give.",
           "explanation":"Only the expected reward group showed significant decline in free-choice drawing. The unexpected reward group showed no decline — the medal came as a surprise after. The problem is specifically contingent, pre-announced rewards for already-enjoyable activities: they shift perceived motivation from \"I like this\" to \"I'm doing this for the reward.\""
          }
        ],
       "relic": {
         "name":"Inverted Hourglass of Discounting",
         "icon": "TIME",
         "description":"Sand flows upward as future value decays.",
         "clearText":"The chest opens and an inverted hourglass glows inside."
        }
      },
      {
       "id":"u2-c5",
       "title":"Chamber V - The Attic of Extinction",
       "intro":"Dust and old case files cover the attic floor. Renewal, reinstatement, spontaneous recovery — all documented up here. Explain them correctly and find the exit.",
       "background":"/images/unit2/chamber-5.jpg",
       "questions": [
          {
           "id":"u2-c5-q1",
           "text":"Bouton and King (1983) conditioned fear in Context A, extinguished in Context B, then tested in Context A. What is the renewal effect and what does it show?",
           "answers": [
              {
               "text":"Fear permanently disappeared after extinction and did not return in any context",
               "correct": false
              },
              {
               "text":"Fear returned in Context B, showing extinction is not context-specific",
               "correct": false
              },
              {
               "text":"Fear returned when tested in Context A, showing extinction is context-specific and the original learning was never erased",
               "correct": true
              },
              {
               "text":"Fear returned only after additional conditioning trials were given back in Context A",
               "correct": false
              }
            ],
           "wrongStory":"A white sheet across the room lifts on its own. Underneath: a rocking chair, moving. The attic remembers this room. Extinction happened somewhere else — in another house, another context. Coming back here pulled the fear right out from under the sheet.",
           "explanation":"The renewal effect: conditioning in A → extinction in B → test in A → fear returns. Extinction does not erase the original CS-US memory. It creates a new, context-specific inhibitory memory. The original learning is always there — it just gets covered."
          },
          {
           "id":"u2-c5-q2",
           "text":"Rescorla (2008) improved on Bouton and King using a within-subjects design with pigeons. Why was S3+ included during the extinction phase?",
           "answers": [
              {
               "text":"S3 was a conditioned inhibitor used to speed up extinction of S1 and S2",
               "correct": false
              },
              {
               "text":"S3 was used to distract pigeons and prevent renewal from occurring",
               "correct": false
              },
              {
               "text":"S3 kept pigeons behaviorally active so that reduced responding to S1 and S2 reflected genuine extinction rather than fatigue or disengagement",
               "correct": true
              },
              {
               "text":"S3 replaced S1 and S2 as the primary excitor during extinction",
               "correct": false
              }
            ],
           "wrongStory":"Every pigeon carving in the attic rafters has its eyes closed. Nothing is happening in the session. S1 and S2 sit ignored — but is that extinction, or are they just asleep up there? Without a live control, you can't tell the difference between learning and napping.",
           "explanation":"Without S3+, pigeons might stop responding simply because nothing interesting was happening — behavioral fatigue or disengagement. S3+ kept them active and responding, ensuring that reduced responding to S1 and S2 reflected genuine extinction learning."
          },
          {
           "id":"u2-c5-q3",
           "text":"A reinstatement study showed that an unsignaled shock in the same context as extinction restored more fear to the CS than a shock in a different context. Which theory best explains this?",
           "answers": [
              {
               "text":"Context summation — the excitatory context adds its associative strength to CS fear regardless of shock location",
               "correct": false
              },
              {
               "text":"Bouton's ambiguity theory — the extinguished CS has two memories; an excitatory context retrieves the CS-US memory rather than the CS-no US memory",
               "correct": true
              },
              {
               "text":"Sensitization — the shock raises overall arousal and amplifies all responses equally across contexts",
               "correct": false
              },
              {
               "text":"The result disproves both theories and suggests reinstatement is purely physiological",
               "correct": false
              }
            ],
           "wrongStory":"A dusty mirror in the attic shows two reflections of you — one afraid, one calm. Same face. Same CS. Depending on where you're standing in this attic, the mirror shows a different one. The context isn't adding fear on top of fear. It's choosing which memory to show you.",
           "explanation":"The results did not support context summation, which would predict equal differences across both reinstatement groups. Bouton's theory better explains it: the extinguished CS is ambiguous — it has both a CS-US memory and a CS-no US memory. Context determines which one is retrieved. An excitatory context pulls out the fear."
          },
          {
           "id":"u2-c5-q4",
           "text":"Rescorla (1993) showed that a stimulus present during extinction of lever pressing later inhibited lever pressing and enhanced chain pulling. What does this demonstrate?",
           "answers": [
              {
               "text":"Extinction of an instrumental response permanently erases the R-O association",
               "correct": false
              },
              {
               "text":"Extinction generalizes equally across all responses, reducing both R1 and R2",
               "correct": false
              },
              {
               "text":"Extinction creates response-specific inhibition — the noise became a signal to not press the lever, selectively suppressing R1 and releasing R2",
               "correct": true
              },
              {
               "text":"Instrumental extinction works by increasing reinforcer salience, not by inhibiting the response",
               "correct": false
              }
            ],
           "wrongStory":"Both levers on the attic wall go cold and dark at once. A chain in the corner goes untouched. That would be general extinction — but the noise was only present during lever extinction. Pull the chain. The chain was never covered by that particular sheet.",
           "explanation":"Extinction creates stimulus-specific inhibition of specific responses. The noise, present during lever extinction, became a signal for \"don't lever press.\" When noise appeared, lever pressing dropped and chain pulling rose — inhibiting one response releases competitive suppression on the other, mirroring Pavlovian conditioned inhibition."
          },
          {
           "id":"u2-c5-q5",
           "text":"Which strategy would most effectively reduce relapse after extinction, based on renewal, reinstatement, and spontaneous recovery?",
           "answers": [
              {
               "text":"Conducting extinction in a single long session in the original acquisition context",
               "correct": false
              },
              {
               "text":"Using verbal instruction alone to explain the CS no longer predicts the US",
               "correct": false
              },
              {
               "text":"Conducting extinction across multiple different contexts, with spaced sessions and attention to reminder cues",
               "correct": true
              },
              {
               "text":"Pairing the CS with a novel neutral stimulus immediately after extinction to block spontaneous recovery",
               "correct": false
              }
            ],
           "wrongStory":"You extinguished your fear of this attic in one session, on one night. You walked out feeling free. Then you came back in through the front door — a different context, a different night. The sheet lifted on its own. One session in one house was never going to be enough.",
           "explanation":"Because extinction is context-specific, a single context leaves the original memory fully intact everywhere else. Multiple contexts reduce renewal. Spaced sessions produce more durable decrements. Attention to reminder cues reduces reinstatement. No single method eliminates all relapse risk — the original learning is never erased, only covered."
          }
        ],
       "relic": {
         "name":"EXIT Key",
         "icon": "KEY",
         "description":"Extinction doesn't erase the original memory. It just adds a new one. The key still opens the door.",
         "clearText":"The final lock clicks. The EXIT Key lands in your palm."
        }
      }
    ]
  },
  {
   "id":"unit3",
   "title":"Alien Ship Escape Protocol",
   "subtitle":"Escape the Alien Ship",
   "theme":"alien",
   "emoji": "U3",
   "description":"Behaviorist aliens. Three ship sections between you and the airlock. Each one tests a different piece of learning theory.",
   "intro":"You're locked aboard a behaviorist alien ship and the airlock is sealed. Three sections stand between you and home. Every console tests a principle. Get through all of them.",
   "winText":"The pod launches toward Earth as the ship transmits one final warning: do not confuse suppression with erasure.",
   "chamberStartBg":"/images/unit3/chamber-start.jpg",
   "chamberEndBg":"/images/unit3/chamber-end.jpg",
   "chambers": [
      {
       "id":"u3-c1",
       "title":"Section I - Docking Bay of Consequences",
       "intro":"Holographic puzzle boxes line the docking bay walls, each one running a punishment protocol. Get through the consequence theory and the blast door opens.",
       "background":"/images/unit3/chamber-1.jpg",
       "questions": [
          {
           "id":"u3-c1-q1",
           "text":"Thorndike's Law of Effect states that behavior followed by satisfying consequences becomes more likely. In S-R (habit) theory, what is actually learned?",
           "answers": [
              {
               "text":"A flexible, goal-directed plan for obtaining the outcome",
               "correct": false
              },
              {
               "text":"A mental representation of the reward and how to obtain it",
               "correct": false
              },
              {
               "text":"A strengthened stimulus-response association — a habit — with no encoding of the outcome itself",
               "correct": true
              },
              {
               "text":"An expectancy about what will happen after the behavior is performed",
               "correct": false
              }
            ],
           "wrongStory":"The holographic cat in the nearest cage flickers and shakes its head. A red light pulses on the console. The alien translation protocol emits a sound that is unmistakably disappointment. S-R theory says the reward builds the habit — it is not part of what is stored.",
           "explanation":"In S-R theory, the satisfying outcome strengthens the bond between stimulus and response, but the animal encodes nothing about the outcome itself. The reward is the engine of habit formation, not the content of what is learned."
          },
          {
           "id":"u3-c1-q2",
           "text":"Punishment is defined as a consequence that makes a response less likely. According to Skinner's experiment on positive punishment, what did the results show?",
           "answers": [
              {
               "text":"Positive punishment permanently eliminated lever pressing in the punished group",
               "correct": false
              },
              {
               "text":"Punished rats took much longer to resume lever pressing after punishment ended",
               "correct": false
              },
              {
               "text":"Punishment was largely ineffective — total lever presses across extinction were nearly identical between punished and unpunished groups",
               "correct": true
              },
              {
               "text":"Punishment was highly effective but only when delivered on a variable ratio schedule",
               "correct": false
              }
            ],
           "wrongStory":"A mechanical arm extends from the wall and taps your hand lightly. You flinch — then keep doing exactly what you were doing. Skinner's rats felt the same way. The slap suppressed briefly. The total count barely changed.",
           "explanation":"Skinner found that rats whose paws were slapped during extinction pressed the lever just as many times overall as unslapped controls. The punishment temporarily suppressed behavior but did not reduce the total amount — suggesting it interfered emotionally rather than eliminating the underlying association."
          },
          {
           "id":"u3-c1-q3",
           "text":"Camp, Raymond, and Church (1967) tested what makes punishment effective. Which two factors most increased behavioral suppression?",
           "answers": [
              {
               "text":"Punishment delivered on a variable schedule and at low intensity",
               "correct": false
              },
              {
               "text":"Punishment delivered randomly and paired with a warning stimulus",
               "correct": false
              },
              {
               "text":"Punishment delivered immediately after behavior and at higher intensity",
               "correct": true
              },
              {
               "text":"Punishment delivered after a long delay and at moderate intensity",
               "correct": false
              }
            ],
           "wrongStory":"The alien console logs your response and displays a timeline — punishment delivered 10 seconds late, at minimal intensity. The holographic rat keeps pressing. Late and weak is barely a consequence at all. The ship's behavioral database is unimpressed.",
           "explanation":"Camp et al. found that punishment is most effective when swift (delivered immediately) and sufficient (intense enough to matter). Delayed or weak punishment produces far less suppression of the target behavior."
          },
          {
           "id":"u3-c1-q4",
           "text":"Which of the following is a well-documented problem with using punishment as a behavior modification strategy?",
           "answers": [
              {
               "text":"Punishment always causes permanent forgetting of the punished behavior",
               "correct": false
              },
              {
               "text":"Punishment is only ineffective in nonhuman animals — it works reliably in humans",
               "correct": false
              },
              {
               "text":"The punished behavior is suppressed but not forgotten — it returns when the punishing agent is absent, and the punisher may become a discriminative stimulus for when it is safe to misbehave",
               "correct": true
              },
              {
               "text":"Punishment always produces immediate aggression that cannot be conditioned or modified",
               "correct": false
              }
            ],
           "wrongStory":"A child's hologram appears on the docking bay wall — behaving perfectly while a stern figure watches. The figure turns away. The behavior comes back immediately. The alien ship has seen this exact pattern before. Suppression is not elimination.",
           "explanation":"Punished behavior is suppressed, not erased. When the punishing agent is absent, the behavior returns. The punisher becomes an Sd — a signal that punishment is imminent — teaching the organism when it is safe to perform the behavior again rather than eliminating it."
          },
          {
           "id":"u3-c1-q5",
           "text":"The conditioned suppression theory of punishment argues that punishment does not directly weaken behavior. Instead, what does it claim?",
           "answers": [
              {
               "text":"Punishment strengthens competing S-R associations that replace the punished behavior",
               "correct": false
              },
              {
               "text":"Punishment works by increasing the salience of the reinforcer, making the behavior less necessary",
               "correct": false
              },
              {
               "text":"The punishing event produces an emotional response that interferes with the behavior — the animal is too upset to perform it, not unable to",
               "correct": true
              },
              {
               "text":"Punishment works identically to extinction — both reduce behavior by removing the reinforcer",
               "correct": false
              }
            ],
           "wrongStory":"A shock crackles somewhere deep in the ship. The holographic rat freezes — not because it forgot how to press the lever, but because something emotional has taken over entirely. The behavior is still in there. Fear is just sitting on top of it.",
           "explanation":"Conditioned suppression theory holds that punishment produces fear or emotional disruption that interferes with the behavior. The S-R association is not weakened — the animal is simply too emotionally activated to perform the response. Remove the punishment, and the behavior typically returns."
          }
        ],
       "relic": {
         "name":"Amber Consequence Token",
         "icon": "TOK",
         "description":"The Law of Effect, compressed into amber.",
         "clearText":"The central console ejects a glowing amber token."
        }
      },
      {
       "id":"u3-c2",
       "title":"Section II - Avoidance Engine Room",
       "intro":"Warning lights cycle. Turbines hum. This sector covers fear signals, shock reduction, and how ERP actually works.",
       "background":"/images/unit3/chamber-2.jpg",
       "questions": [
          {
           "id":"u3-c2-q1",
           "text":"The Two-Process Theory of avoidance learning proposes that avoidance involves two distinct processes. What are they?",
           "answers": [
              {
               "text":"Habituation and sensitization working in opposition",
               "correct": false
              },
              {
               "text":"Positive reinforcement of the avoidance response and negative punishment of staying still",
               "correct": false
              },
              {
               "text":"Classical conditioning (CS-US: warning signal-shock) and instrumental conditioning (S-R: warning signal-response, reinforced by fear reduction)",
               "correct": true
              },
              {
               "text":"Outcome devaluation and response-outcome encoding operating simultaneously",
               "correct": false
              }
            ],
           "wrongStory":"The warning lights flash again. You stand perfectly still and nothing happens — but you don't know why. The two-process theory requires you to understand both why the warning signal triggers fear AND why responding to it feels rewarding. You only named one half of the engine.",
           "explanation":"Two-Process Theory says avoidance works via (1) classical conditioning — the warning signal (CS) becomes associated with shock (US), producing fear; and (2) instrumental conditioning — the avoidance response is reinforced by the reduction of that fear when the warning signal is terminated or avoided."
          },
          {
           "id":"u3-c2-q2",
           "text":"A key challenge to Two-Process Theory came from Kamin, Brimer, and Black (1963), who measured fear to the warning stimulus across different levels of avoidance training. What did they find?",
           "answers": [
              {
               "text":"Fear and avoidance responding were perfectly correlated throughout training",
               "correct": false
              },
              {
               "text":"Fear increased linearly with avoidance proficiency across all trial counts",
               "correct": false
              },
              {
               "text":"Highly trained avoiders showed less fear to the warning stimulus than moderately trained animals — fear and avoidance were not fully correlated",
               "correct": true
              },
              {
               "text":"Fear disappeared entirely after 9 consecutive avoidance trials, proving Two-Process Theory correct",
               "correct": false
              }
            ],
           "wrongStory":"The warning light flashes and a highly trained crew member of the alien ship walks past it without flinching — no fear response at all. Yet they clearly know to avoid what it signals. If fear drives avoidance, the most experienced avoiders should be the most afraid. They aren't.",
           "explanation":"Kamin et al. found that fear (measured by suppression ratio) peaked at moderate training levels and then decreased in highly trained animals — even as avoidance responding remained strong. This decoupling of fear and avoidance challenges the Two-Process claim that fear is the direct motivator of avoidance."
          },
          {
           "id":"u3-c2-q3",
           "text":"Herrnstein and Hineline (1966) trained rats to press a lever that reduced — but did not eliminate — shock probability. What did this demonstrate about avoidance?",
           "answers": [
              {
               "text":"Avoidance requires a discrete warning signal to be learned",
               "correct": false
              },
              {
               "text":"Animals can only learn to avoid shocks they have previously experienced at full intensity",
               "correct": false
              },
              {
               "text":"Animals can learn to reduce shock rate even without being able to fully escape or avoid shocks, showing that shock reduction itself is reinforcing",
               "correct": true
              },
              {
               "text":"Lever pressing in this study was maintained by positive reinforcement, not negative reinforcement",
               "correct": false
              }
            ],
           "wrongStory":"The turbines hum. Shocks come anyway — just less often. The alien engineers watch as the rat keeps pressing despite never achieving full safety. The reduction alone was enough. The ship logs this: \"Partial relief is still relief.\"",
           "explanation":"Rats learned to press a lever that reduced shock probability from .3 to .1 — with no warning signal and no complete escape. This shows animals can learn avoidance-like behavior purely through reduction in aversive event rate, challenging Two-Process Theory's requirement for a discrete fear-inducing CS."
          },
          {
           "id":"u3-c2-q4",
           "text":"Rescorla (1968) tested whether the feedback stimulus produced by an avoidance response becomes a conditioned inhibitor for fear. What did the results show?",
           "answers": [
              {
               "text":"The tone had no effect on avoidance responding in either group",
               "correct": false
              },
              {
               "text":"The contingent tone increased avoidance responding by acting as a conditioned excitor",
               "correct": false
              },
              {
               "text":"For the group where the tone was contingent on the avoidance response, the tone suppressed further avoidance — the animal felt safe and stopped responding",
               "correct": true
              },
              {
               "text":"Both groups showed identical suppression of avoidance, disproving conditioned inhibition as a source of reinforcement",
               "correct": false
              }
            ],
           "wrongStory":"The engine room's warning light clicks off the moment you step back. You immediately relax and stop moving. That safety signal told you the threat was gone — so you stopped avoiding. The tone did the same thing to the rats. Safety is its own reinforcer.",
           "explanation":"When the tone was contingent on the avoidance response (group A'), it became a conditioned inhibitor — a safety signal — and suppressed further avoidance responding. The control group showed no change. This supports the idea that stimuli associated with avoidance responses become safety signals, making the avoidance response self-reinforcing through conditioned inhibition of fear."
          },
          {
           "id":"u3-c2-q5",
           "text":"Exposure and Response Prevention (ERP) therapy is used for OCD and anxiety. How does it work in terms of learning theory?",
           "answers": [
              {
               "text":"It uses positive punishment to reduce the frequency of obsessive thoughts",
               "correct": false
              },
              {
               "text":"It pairs the feared stimulus with a pleasant unconditioned stimulus to create a new association",
               "correct": false
              },
              {
               "text":"It exposes the patient to the feared stimulus while preventing the compulsive avoidance response, allowing the patient to learn that not performing the ritual causes no harm",
               "correct": true
              },
              {
               "text":"It uses systematic shaping to gradually reinforce calmer responses to the feared stimulus",
               "correct": false
              }
            ],
           "wrongStory":"The warning lights flash and you immediately start pressing every button in sight. Nothing helps. The ship observes: you are performing the compulsion. ERP requires you to let the lights flash — and do nothing — until you learn that the feared outcome never comes.",
           "explanation":"ERP involves deliberate exposure to obsession-triggering stimuli (Exposure) while choosing not to perform the compulsive ritual (Response Prevention). The patient learns through experience that the feared consequence does not occur when the ritual is omitted — extinguishing the avoidance behavior through non-reinforcement."
          }
        ],
       "relic": {
         "name":"Safety Signal Shield",
         "icon": "SHD",
         "description":"The shield signals safety. That's exactly what a conditioned inhibitor does.",
         "clearText":"A floor panel opens and reveals a polished safety shield."
        }
      },
      {
       "id":"u3-c3",
       "title":"Section III - Command Deck of Extinction",
       "intro":"Five holographic environments rotate around the captain's chair, each one a different context. Name the relapse mechanisms and the airlock opens.",
       "background":"/images/unit3/chamber-3.jpg",
       "questions": [
          {
           "id":"u3-c3-q1",
           "text":"The renewal effect (Bouton and King, 1983) demonstrated that fear extinguished in Context B returned when animals were tested in Context A. What does this prove about extinction?",
           "answers": [
              {
               "text":"Extinction permanently erases the original CS-US association",
               "correct": false
              },
              {
               "text":"Fear returns only if additional conditioning trials are given in Context A",
               "correct": false
              },
              {
               "text":"Extinction is context-specific — the original fear memory is never erased, only suppressed by a new inhibitory memory tied to the extinction context",
               "correct": true
              },
              {
               "text":"Renewal only occurs when extinction is conducted too quickly",
               "correct": false
              }
            ],
           "wrongStory":"One of the holographic environments on the command deck flickers — the red-striped one. A rat inside it freezes in fear, despite having been perfectly calm in the gold one moments before. The captain's chair creaks. The alien ship has watched humans relapse this way for centuries.",
           "explanation":"Renewal shows that returning to the acquisition context restores the extinguished fear response. This proves extinction does not erase the original CS-US memory — it creates a new, context-specific inhibitory memory. The original fear is always there; extinction only covers it in the context where it occurred."
          },
          {
           "id":"u3-c3-q2",
           "text":"Bouton's ambiguity theory explains reinstatement by arguing that the extinguished CS is ambiguous. What does context do according to this theory?",
           "answers": [
              {
               "text":"Context adds its own associative strength to the CS, producing summation",
               "correct": false
              },
              {
               "text":"Context determines how intense the unconditioned stimulus will be on the next trial",
               "correct": false
              },
              {
               "text":"Context resolves the ambiguity of the extinguished CS by determining which memory is retrieved — CS-US (fear) or CS-no US (safety)",
               "correct": true
              },
              {
               "text":"Context reactivates the conditioned inhibitor formed during extinction, suppressing fear further",
               "correct": false
              }
            ],
           "wrongStory":"Two memories float in the viewport — one labeled fear, one labeled safety — attached to the same CS. The command deck's lights shift color. In one context, the fear memory surfaces. In another, the safety memory does. Context is not adding anything. It is choosing.",
           "explanation":"Bouton's theory: after extinction, the CS has two memories — CS-US and CS-no US. The CS is ambiguous. Context acts as a retrieval cue, determining which memory is activated. An excitatory (acquisition) context retrieves the fear memory; a neutral or extinction context retrieves the safety memory."
          },
          {
           "id":"u3-c3-q3",
           "text":"Which of the following strategies would most effectively reduce relapse after extinction, based on the phenomena of renewal, reinstatement, and spontaneous recovery?",
           "answers": [
              {
               "text":"Conducting a single long extinction session in the original acquisition context",
               "correct": false
              },
              {
               "text":"Using verbal instruction alone to explain the CS no longer predicts the US",
               "correct": false
              },
              {
               "text":"Conducting extinction across multiple different contexts with spaced sessions and attention to reminder cues",
               "correct": true
              },
              {
               "text":"Pairing the CS with a novel neutral stimulus immediately after extinction to block recovery",
               "correct": false
              }
            ],
           "wrongStory":"The command deck shows a single extinction session — one context, one night, perfectly executed. Then the patient goes home. The renewal effect activates. The reinstatement effect activates. Spontaneous recovery creeps in. One session in one context was never going to hold against all three.",
           "explanation":"Because extinction is context-specific (renewal), single-context extinction leaves the original memory intact everywhere else. Multiple contexts generalize extinction more broadly. Spaced sessions produce more durable decrements. Addressing reminder cues prevents reinstatement. No single method eliminates relapse risk — the original learning is never erased."
          },
          {
           "id":"u3-c3-q4",
           "text":"Rescorla (1993) showed that a stimulus present during extinction of lever pressing later inhibited lever pressing and enhanced chain pulling. What does this demonstrate?",
           "answers": [
              {
               "text":"Extinction of an instrumental response permanently erases the R-O association",
               "correct": false
              },
              {
               "text":"Extinction spreads equally across all responses, reducing both R1 and R2 uniformly",
               "correct": false
              },
              {
               "text":"Extinction creates response-specific conditioned inhibition — the stimulus became a signal to not press the lever, selectively suppressing R1 and releasing R2",
               "correct": true
              },
              {
               "text":"Instrumental extinction works by increasing reinforcer salience rather than inhibiting the response",
               "correct": false
              }
            ],
           "wrongStory":"Both response panels on the command deck go dark at once. The alien captain's log buzzes: \"Error — generalization assumed.\" The noise was only present during lever extinction. The chain was untouched by it. Inhibition is specific. It only covers the response it was built around.",
           "explanation":"The stimulus present during lever-extinction became a conditioned inhibitor specific to lever pressing. When presented, R1 (lever) decreased and R2 (chain) increased — because inhibiting one response releases competitive suppression on the other. Instrumental extinction mirrors Pavlovian conditioned inhibition: specific, not general."
          },
          {
           "id":"u3-c3-q5",
           "text":"Crespi (1942) found depression and elation effects when rats were shifted to different reward magnitudes. What do these effects prove about what animals learn?",
           "answers": [
              {
               "text":"Animals learn only the motor pattern of the response, with no knowledge of reward size",
               "correct": false
              },
              {
               "text":"Reward magnitude has no effect on running speed once behavior is fully trained",
               "correct": false
              },
              {
               "text":"Animals form expectancies about reward magnitude — when reality violates that expectancy, behavior shifts beyond what S-R theory predicts",
               "correct": true
              },
              {
               "text":"The effects prove that punishment, not reinforcement, is the primary driver of instrumental behavior",
               "correct": false
              }
            ],
           "wrongStory":"The command deck's final display shows two rats — one sulking, one sprinting. They received the same reward. But one expected more. The alien ship logs it quietly: \"Expectancy violation detected. S-R theory insufficient.\" The rats knew what they were owed.",
           "explanation":"The depression effect (downshifted rats run slower than controls always on small reward) and elation effect (upshifted rats run faster than controls always on large reward) both show that animals encode specific expectations about outcomes. When those expectations are violated, behavior overshoots or undershoots what S-R theory would predict."
          }
        ],
       "relic": {
         "name":"Open Airlock Sigil",
         "icon": "AIR",
         "description":"Permission to leave the ship and return home.",
         "clearText":"The airlock ring ignites as the final sigil activates."
        }
      }
    ]
  }
];

export const unitTree = buildUnitMaps(units);

function buildUnitMaps(unitList) {
  const map = new Map();

  unitList.forEach((unit) => {
    const chamberMap = new Map();
    unit.chambers.forEach((chamber) => {
      chamberMap.set(chamber.id, chamber);
    });
    map.set(unit.id, chamberMap);
  });

  return map;
}


