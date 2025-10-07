/**
 * User Calendar Colorizer
 * 
 * Simple script that colors an existing calendar based on a user's MA (Major Assessment) count per day.
 * 
 * Usage:
 * 1. Include this script in your HTML page
 * 2. Call initUserCalendarColorizer(userId) with the target user's ID
 * 
 * The script will:
 * - Load MA data from ma_dump.json
 * - Find all classes the user is enrolled in
 * - Count MAs per day for that user
 * - Color calendar cells based on MA density
 */

class UserCalendarColorizer {
    constructor(userId) {
        this.userId = userId;
        this.data = null;
        this.userMAsByDate = {};
    }

    async init() {
        console.log(`🚀 Initializing calendar colorizer for user: ${this.userId}`);
        await this.loadData();
        this.calculateUserMAs();
        this.colorCalendar();
        console.log('✅ Initialization complete');
    }

    async loadData() {
        console.log('📥 Loading data from ma_dump.json...');
        // try {
        //     const response = await fetch('ma_dump.json');
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     this.data = await response.json();
        //     console.log('✓ Data loaded successfully');
        //     console.log(`  - Students: ${this.data.students?.length || 0}`);
        //     console.log(`  - Courses: ${this.data.courses?.length || 0}`);
        // } catch (error) {
        //     console.error('❌ Error loading data:', error);
        //     console.error('Make sure ma_dump.json is in the same directory as this HTML file');
        //     this.data = { students: [], courses: [] };
        // }

        this.data = {
  "students": [
    {
      "user_id": "12552282",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12552287",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        }
      ]
    },
    {
      "user_id": "10060334",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12552289",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "10060343",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552293",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "10060339",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12023229",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "10060348",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        }
      ]
    },
    {
      "user_id": "12552302",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        }
      ]
    },
    {
      "user_id": "10060373",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        }
      ]
    },
    {
      "user_id": "10060359",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        }
      ]
    },
    {
      "user_id": "12023210",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        }
      ]
    },
    {
      "user_id": "10060342",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        }
      ]
    },
    {
      "user_id": "12023206",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "10060354",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        }
      ]
    },
    {
      "user_id": "10060355",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "10060356",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "10060327",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12023155",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12023170",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12552286",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "12558027",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        }
      ]
    },
    {
      "user_id": "12556659",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "10060351",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12023202",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        }
      ]
    },
    {
      "user_id": "10060363",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "10060323",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552305",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12574796",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "10060337",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715024"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "10060316",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        }
      ]
    },
    {
      "user_id": "12552310",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715016"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        }
      ]
    },
    {
      "user_id": "12552311",
      "enrollments": [
        {
          "course_id": "3509873",
          "section_id": "3715015"
        },
        {
          "course_id": "3509882",
          "section_id": "3715026"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        }
      ]
    },
    {
      "user_id": "12552284",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        }
      ]
    },
    {
      "user_id": "10060325",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "10060320",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "10060318",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "10060328",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        }
      ]
    },
    {
      "user_id": "12552291",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509925",
          "section_id": "3715049"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        }
      ]
    },
    {
      "user_id": "12023183",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "10060336",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552295",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12552297",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12552299",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023130",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12023198",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        }
      ]
    },
    {
      "user_id": "12023141",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        }
      ]
    },
    {
      "user_id": "10060350",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "10060358",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "12023215",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "10060341",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        }
      ]
    },
    {
      "user_id": "12560707",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12023169",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "12552285",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "12552283",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12269972",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12023205",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "10060347",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552290",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        }
      ]
    },
    {
      "user_id": "10060324",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12552292",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "12023181",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        }
      ]
    },
    {
      "user_id": "10060313",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "10060362",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12586812",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552294",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12552296",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12552300",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        }
      ]
    },
    {
      "user_id": "12584649",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        }
      ]
    },
    {
      "user_id": "12552301",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "10060340",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "10060332",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "10060317",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        }
      ]
    },
    {
      "user_id": "12552304",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "12587111",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715021"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12552306",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12552307",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715034"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "10060357",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        }
      ]
    },
    {
      "user_id": "12552308",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509902",
          "section_id": "3715050"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        }
      ]
    },
    {
      "user_id": "12023145",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715052"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12269880",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715058"
        },
        {
          "course_id": "3509940",
          "section_id": "3715122"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12552309",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715019"
        },
        {
          "course_id": "3509885",
          "section_id": "3715031"
        },
        {
          "course_id": "3509902",
          "section_id": "3715046"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12023228",
      "enrollments": [
        {
          "course_id": "3509874",
          "section_id": "3715018"
        },
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509885",
          "section_id": "3715028"
        },
        {
          "course_id": "3509902",
          "section_id": "3715055"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509940",
          "section_id": "3715125"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        }
      ]
    },
    {
      "user_id": "12419502",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12266782",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "10060322",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12266773",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "8701177",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509925",
          "section_id": "3715049"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        }
      ]
    },
    {
      "user_id": "12419500",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "12396738",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        }
      ]
    },
    {
      "user_id": "8701113",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509925",
          "section_id": "3715049"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        }
      ]
    },
    {
      "user_id": "8701164",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        }
      ]
    },
    {
      "user_id": "12266843",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        }
      ]
    },
    {
      "user_id": "8314056",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        }
      ]
    },
    {
      "user_id": "10060314",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12396744",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12396721",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12396720",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12396729",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "10060344",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12269956",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        }
      ]
    },
    {
      "user_id": "9213295",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3514087",
          "section_id": "3720081"
        }
      ]
    },
    {
      "user_id": "8314126",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        }
      ]
    },
    {
      "user_id": "8701099",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        }
      ]
    },
    {
      "user_id": "12266794",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "8314117",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        }
      ]
    },
    {
      "user_id": "8314214",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        }
      ]
    },
    {
      "user_id": "12301235",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "10060338",
      "enrollments": [
        {
          "course_id": "3509875",
          "section_id": "3715032"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "9213378",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12396731",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        }
      ]
    },
    {
      "user_id": "12266795",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        }
      ]
    },
    {
      "user_id": "10060366",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509949",
          "section_id": "3715130"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514087",
          "section_id": "3720081"
        }
      ]
    },
    {
      "user_id": "11992314",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "9213321",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "11992365",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12292614",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12266784",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12138690",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12396727",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12266818",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        }
      ]
    },
    {
      "user_id": "11992369",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        }
      ]
    },
    {
      "user_id": "12396732",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "9213406",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "8701118",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "11992375",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12396741",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3514089",
          "section_id": "3720083"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "11992399",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "12269884",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12138693",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        }
      ]
    },
    {
      "user_id": "9213245",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509949",
          "section_id": "3715130"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        }
      ]
    },
    {
      "user_id": "12266779",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "11992379",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        }
      ]
    },
    {
      "user_id": "12023235",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12419504",
      "enrollments": [
        {
          "course_id": "3509891",
          "section_id": "3715035"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12396734",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "9213336",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "8314220",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        }
      ]
    },
    {
      "user_id": "12266822",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12266834",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "12396747",
      "enrollments": [
        {
          "course_id": "3509892",
          "section_id": "3715100"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "12269923",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12419503",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12269859",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12406228",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        }
      ]
    },
    {
      "user_id": "12406230",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12406241",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12406762",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        }
      ]
    },
    {
      "user_id": "12406232",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12269909",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12269955",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12023114",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12269937",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12406235",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12406768",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12023156",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12269864",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        }
      ]
    },
    {
      "user_id": "12406249",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406239",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        }
      ]
    },
    {
      "user_id": "12023162",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023122",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12406240",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12269898",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406245",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12406247",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12269867",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406248",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12269870",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        }
      ]
    },
    {
      "user_id": "12269873",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        }
      ]
    },
    {
      "user_id": "12272178",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12270147",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406254",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        }
      ]
    },
    {
      "user_id": "12275388",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12269866",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406256",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        }
      ]
    },
    {
      "user_id": "12269902",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        }
      ]
    },
    {
      "user_id": "12274167",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        }
      ]
    },
    {
      "user_id": "12406260",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12023157",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12269882",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        }
      ]
    },
    {
      "user_id": "12023153",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12269900",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12269964",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12413840",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12269916",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        }
      ]
    },
    {
      "user_id": "12269912",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        }
      ]
    },
    {
      "user_id": "12406760",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12427408",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        }
      ]
    },
    {
      "user_id": "12269932",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12406263",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12558054",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        }
      ]
    },
    {
      "user_id": "12406265",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12406226",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715041"
        },
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12558029",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715044"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12406266",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715036"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12269887",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        }
      ]
    },
    {
      "user_id": "12269858",
      "enrollments": [
        {
          "course_id": "3509893",
          "section_id": "3715039"
        },
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        }
      ]
    },
    {
      "user_id": "9213354",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12396726",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "8314131",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        }
      ]
    },
    {
      "user_id": "12396728",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "8314185",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        }
      ]
    },
    {
      "user_id": "9213192",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "8700954",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "11992392",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "8701071",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509925",
          "section_id": "3715054"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12266833",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        }
      ]
    },
    {
      "user_id": "11992388",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        }
      ]
    },
    {
      "user_id": "9213390",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        }
      ]
    },
    {
      "user_id": "11992387",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        }
      ]
    },
    {
      "user_id": "11992342",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509925",
          "section_id": "3715054"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        }
      ]
    },
    {
      "user_id": "11992350",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "9213194",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        }
      ]
    },
    {
      "user_id": "8314107",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "9213283",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "11992403",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        }
      ]
    },
    {
      "user_id": "8314077",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509925",
          "section_id": "3715054"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        }
      ]
    },
    {
      "user_id": "11992335",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12396743",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715106"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "11992327",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        }
      ]
    },
    {
      "user_id": "10060360",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "11992336",
      "enrollments": [
        {
          "course_id": "3509895",
          "section_id": "3715102"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "12558032",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        }
      ]
    },
    {
      "user_id": "12558031",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        }
      ]
    },
    {
      "user_id": "12023142",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12023199",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12558046",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        }
      ]
    },
    {
      "user_id": "12406766",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        }
      ]
    },
    {
      "user_id": "12556680",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        }
      ]
    },
    {
      "user_id": "12558050",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        }
      ]
    },
    {
      "user_id": "12406262",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        }
      ]
    },
    {
      "user_id": "12556660",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        }
      ]
    },
    {
      "user_id": "12556685",
      "enrollments": [
        {
          "course_id": "3509898",
          "section_id": "3715109"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        }
      ]
    },
    {
      "user_id": "8314137",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        }
      ]
    },
    {
      "user_id": "11992357",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509925",
          "section_id": "3715049"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        }
      ]
    },
    {
      "user_id": "12396730",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        }
      ]
    },
    {
      "user_id": "8701126",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        }
      ]
    },
    {
      "user_id": "11992329",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        }
      ]
    },
    {
      "user_id": "9213219",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "8700949",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        },
        {
          "course_id": "3515907",
          "section_id": "3715219"
        }
      ]
    },
    {
      "user_id": "9213195",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "8701121",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "12403883",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "12396742",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "8314162",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        }
      ]
    },
    {
      "user_id": "12266777",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        }
      ]
    },
    {
      "user_id": "8701055",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "8700993",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12266827",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12424066",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        }
      ]
    },
    {
      "user_id": "12396749",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        }
      ]
    },
    {
      "user_id": "12138686",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715040"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12266810",
      "enrollments": [
        {
          "course_id": "3509900",
          "section_id": "3715037"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        }
      ]
    },
    {
      "user_id": "9213297",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "9213221",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "9213186",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12595216",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        }
      ]
    },
    {
      "user_id": "9213396",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "10060353",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        }
      ]
    },
    {
      "user_id": "8701096",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        }
      ]
    },
    {
      "user_id": "12424067",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "9213290",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12266798",
      "enrollments": [
        {
          "course_id": "3509901",
          "section_id": "3715112"
        },
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        }
      ]
    },
    {
      "user_id": "12266774",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3514085",
          "section_id": "3720079"
        }
      ]
    },
    {
      "user_id": "10060330",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        }
      ]
    },
    {
      "user_id": "8314194",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        },
        {
          "course_id": "3514087",
          "section_id": "3720081"
        }
      ]
    },
    {
      "user_id": "10060352",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3514089",
          "section_id": "3720083"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "8314120",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        }
      ]
    },
    {
      "user_id": "10060326",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        }
      ]
    },
    {
      "user_id": "9213188",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        }
      ]
    },
    {
      "user_id": "12266800",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12396748",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        }
      ]
    },
    {
      "user_id": "11992395",
      "enrollments": [
        {
          "course_id": "3509903",
          "section_id": "3715042"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        }
      ]
    },
    {
      "user_id": "9213400",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "9213365",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3514089",
          "section_id": "3720083"
        }
      ]
    },
    {
      "user_id": "9213352",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "8314151",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3514085",
          "section_id": "3720079"
        }
      ]
    },
    {
      "user_id": "12403881",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510064",
          "section_id": "3715203"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        }
      ]
    },
    {
      "user_id": "9213403",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        }
      ]
    },
    {
      "user_id": "12396737",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        },
        {
          "course_id": "3514089",
          "section_id": "3720083"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "10060333",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "9213366",
      "enrollments": [
        {
          "course_id": "3509904",
          "section_id": "3715114"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        }
      ]
    },
    {
      "user_id": "12586811",
      "enrollments": [
        {
          "course_id": "3509912",
          "section_id": "3715060"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12586810",
      "enrollments": [
        {
          "course_id": "3509912",
          "section_id": "3715063"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "9213204",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12396736",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12396723",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        }
      ]
    },
    {
      "user_id": "12396725",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "8701100",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        }
      ]
    },
    {
      "user_id": "9213196",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715047"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12284271",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "12396735",
      "enrollments": [
        {
          "course_id": "3509914",
          "section_id": "3715045"
        },
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        }
      ]
    },
    {
      "user_id": "8701170",
      "enrollments": [
        {
          "course_id": "3509925",
          "section_id": "3715051"
        },
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        }
      ]
    },
    {
      "user_id": "12266801",
      "enrollments": [
        {
          "course_id": "3509925",
          "section_id": "3715051"
        },
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        }
      ]
    },
    {
      "user_id": "12138691",
      "enrollments": [
        {
          "course_id": "3509925",
          "section_id": "3715051"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "11992413",
      "enrollments": [
        {
          "course_id": "3509925",
          "section_id": "3715051"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        }
      ]
    },
    {
      "user_id": "11992331",
      "enrollments": [
        {
          "course_id": "3509925",
          "section_id": "3715054"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "12556664",
      "enrollments": [
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12558040",
      "enrollments": [
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12406252",
      "enrollments": [
        {
          "course_id": "3509934",
          "section_id": "3715220"
        },
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12396724",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510161",
          "section_id": "3715254"
        }
      ]
    },
    {
      "user_id": "12396733",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715086"
        },
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        }
      ]
    },
    {
      "user_id": "12284269",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        }
      ]
    },
    {
      "user_id": "12266837",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "10060346",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        }
      ]
    },
    {
      "user_id": "12396740",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        }
      ]
    },
    {
      "user_id": "12266825",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        }
      ]
    },
    {
      "user_id": "8700950",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        }
      ]
    },
    {
      "user_id": "12413838",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        }
      ]
    },
    {
      "user_id": "12023239",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715078"
        },
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        }
      ]
    },
    {
      "user_id": "12396722",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510039",
          "section_id": "3715110"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        }
      ]
    },
    {
      "user_id": "8700953",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715088"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        }
      ]
    },
    {
      "user_id": "9213248",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "12399546",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "12396750",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715082"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        }
      ]
    },
    {
      "user_id": "11992374",
      "enrollments": [
        {
          "course_id": "3509935",
          "section_id": "3715081"
        },
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        }
      ]
    },
    {
      "user_id": "8701049",
      "enrollments": [
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        },
        {
          "course_id": "3515907",
          "section_id": "3715211"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "9213197",
      "enrollments": [
        {
          "course_id": "3509936",
          "section_id": "3715117"
        },
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12413836",
      "enrollments": [
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12159240",
      "enrollments": [
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        }
      ]
    },
    {
      "user_id": "9213377",
      "enrollments": [
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12269911",
      "enrollments": [
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "8314202",
      "enrollments": [
        {
          "course_id": "3509944",
          "section_id": "3715127"
        },
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        }
      ]
    },
    {
      "user_id": "9213284",
      "enrollments": [
        {
          "course_id": "3509949",
          "section_id": "3715130"
        },
        {
          "course_id": "3510013",
          "section_id": "3715162"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510124",
          "section_id": "3715221"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "10060370",
      "enrollments": [
        {
          "course_id": "3509949",
          "section_id": "3715130"
        },
        {
          "course_id": "3510008",
          "section_id": "3715152"
        },
        {
          "course_id": "3510032",
          "section_id": "3715167"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12396745",
      "enrollments": [
        {
          "course_id": "3509949",
          "section_id": "3715394"
        },
        {
          "course_id": "3509949",
          "section_id": "3715130"
        },
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "8314200",
      "enrollments": [
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "11992370",
      "enrollments": [
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "8701046",
      "enrollments": [
        {
          "course_id": "3509958",
          "section_id": "3715059"
        },
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        }
      ]
    },
    {
      "user_id": "12638778",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        }
      ]
    },
    {
      "user_id": "12272015",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        }
      ]
    },
    {
      "user_id": "11992355",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12266839",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "8701017",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715136"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "8314173",
      "enrollments": [
        {
          "course_id": "3509963",
          "section_id": "3715134"
        },
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        }
      ]
    },
    {
      "user_id": "11992390",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "11992371",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "8700959",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "8314104",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        }
      ]
    },
    {
      "user_id": "8314170",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        }
      ]
    },
    {
      "user_id": "8701158",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        }
      ]
    },
    {
      "user_id": "8701043",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        }
      ]
    },
    {
      "user_id": "12138696",
      "enrollments": [
        {
          "course_id": "3509964",
          "section_id": "3715062"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12560710",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12406229",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12558035",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12406231",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        }
      ]
    },
    {
      "user_id": "12406233",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556674",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12556676",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12406234",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556678",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12558689",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12558037",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12558039",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        }
      ]
    },
    {
      "user_id": "12406236",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12406238",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12416772",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12406243",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12558042",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12406763",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12406764",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        }
      ]
    },
    {
      "user_id": "12556683",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12406250",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556686",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12406765",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715259"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        }
      ]
    },
    {
      "user_id": "12406258",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556687",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715245"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12556688",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715263"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556689",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        }
      ]
    },
    {
      "user_id": "12406261",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715251"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510024",
          "section_id": "3715029"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12558028",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715249"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715157"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12406264",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715243"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715261"
        },
        {
          "course_id": "3510009",
          "section_id": "3715265"
        },
        {
          "course_id": "3510047",
          "section_id": "3715061"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12406267",
      "enrollments": [
        {
          "course_id": "3509966",
          "section_id": "3715241"
        },
        {
          "course_id": "3509978",
          "section_id": "3715247"
        },
        {
          "course_id": "3509999",
          "section_id": "3715257"
        },
        {
          "course_id": "3510009",
          "section_id": "3715022"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "9213387",
      "enrollments": [
        {
          "course_id": "3509968",
          "section_id": "3715138"
        },
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3514085",
          "section_id": "3720079"
        }
      ]
    },
    {
      "user_id": "11992349",
      "enrollments": [
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510163",
          "section_id": "3715179"
        }
      ]
    },
    {
      "user_id": "11992346",
      "enrollments": [
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3515907",
          "section_id": "3715219"
        }
      ]
    },
    {
      "user_id": "11992354",
      "enrollments": [
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        }
      ]
    },
    {
      "user_id": "11992323",
      "enrollments": [
        {
          "course_id": "3509972",
          "section_id": "3715065"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510163",
          "section_id": "3715174"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "12179595",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        }
      ]
    },
    {
      "user_id": "8314047",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        }
      ]
    },
    {
      "user_id": "11992337",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        }
      ]
    },
    {
      "user_id": "11992317",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        }
      ]
    },
    {
      "user_id": "8314114",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        }
      ]
    },
    {
      "user_id": "12266806",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510010",
          "section_id": "3715073"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514086",
          "section_id": "3720080"
        }
      ]
    },
    {
      "user_id": "11992341",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        }
      ]
    },
    {
      "user_id": "8314061",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        }
      ]
    },
    {
      "user_id": "8701148",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510092",
          "section_id": "3715142"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        }
      ]
    },
    {
      "user_id": "8701167",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        }
      ]
    },
    {
      "user_id": "8314094",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715077"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715154"
        },
        {
          "course_id": "3510146",
          "section_id": "3715166"
        },
        {
          "course_id": "3510163",
          "section_id": "3715177"
        },
        {
          "course_id": "3510196",
          "section_id": "3715030"
        },
        {
          "course_id": "3514087",
          "section_id": "3720081"
        }
      ]
    },
    {
      "user_id": "12023191",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        },
        {
          "course_id": "3514085",
          "section_id": "3720079"
        }
      ]
    },
    {
      "user_id": "8314053",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510014",
          "section_id": "3715076"
        },
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510101",
          "section_id": "3715213"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "11992377",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715068"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "11992383",
      "enrollments": [
        {
          "course_id": "3509977",
          "section_id": "3715069"
        },
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510070",
          "section_id": "3715131"
        },
        {
          "course_id": "3510111",
          "section_id": "3715156"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12558030",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556662",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12558034",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12558036",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12556665",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12556666",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12556668",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12556669",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12558041",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556671",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12556672",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556673",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12556677",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12560708",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12558044",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715255"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "12558048",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510219",
          "section_id": "3715218"
        }
      ]
    },
    {
      "user_id": "12556681",
      "enrollments": [
        {
          "course_id": "3509990",
          "section_id": "3715253"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715212"
        }
      ]
    },
    {
      "user_id": "9213201",
      "enrollments": [
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510055",
          "section_id": "3715189"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3510225",
          "section_id": "3715120"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "9213264",
      "enrollments": [
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510060",
          "section_id": "3715129"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "9213254",
      "enrollments": [
        {
          "course_id": "3510004",
          "section_id": "3715150"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510055",
          "section_id": "3715186"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "9213310",
      "enrollments": [
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510035",
          "section_id": "3715173"
        },
        {
          "course_id": "3510055",
          "section_id": "3715194"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "10060331",
      "enrollments": [
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510029",
          "section_id": "3715164"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510055",
          "section_id": "3715192"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        }
      ]
    },
    {
      "user_id": "12403882",
      "enrollments": [
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "12413839",
      "enrollments": [
        {
          "course_id": "3510013",
          "section_id": "3715159"
        },
        {
          "course_id": "3510035",
          "section_id": "3715176"
        },
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        },
        {
          "course_id": "3516857",
          "section_id": "3715071"
        }
      ]
    },
    {
      "user_id": "9213191",
      "enrollments": [
        {
          "course_id": "3510013",
          "section_id": "3715155"
        },
        {
          "course_id": "3510035",
          "section_id": "3715170"
        },
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510055",
          "section_id": "3715197"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3516863",
          "section_id": "3715093"
        }
      ]
    },
    {
      "user_id": "12396718",
      "enrollments": [
        {
          "course_id": "3510019",
          "section_id": "3715080"
        },
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3514082",
          "section_id": "3720076"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "9213397",
      "enrollments": [
        {
          "course_id": "3510019",
          "section_id": "3715083"
        },
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "10060361",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        }
      ]
    },
    {
      "user_id": "12270146",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3514079",
          "section_id": "3720073"
        }
      ]
    },
    {
      "user_id": "8700956",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        }
      ]
    },
    {
      "user_id": "10060364",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510102",
          "section_id": "3715148"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "8701025",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "12023158",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "8701152",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "9213239",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715095"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "8701135",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715099"
        },
        {
          "course_id": "3510092",
          "section_id": "3715145"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3516866",
          "section_id": "3715096"
        }
      ]
    },
    {
      "user_id": "12269941",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715092"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "8701106",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715090"
        },
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510127",
          "section_id": "3715224"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        }
      ]
    },
    {
      "user_id": "12266815",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715085"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        }
      ]
    },
    {
      "user_id": "9213330",
      "enrollments": [
        {
          "course_id": "3510030",
          "section_id": "3715087"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510104",
          "section_id": "3715214"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        }
      ]
    },
    {
      "user_id": "12269875",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406237",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12406767",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12269958",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12269954",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269886",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12406244",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12269952",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12406246",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12413843",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12406251",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12406253",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12272012",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        }
      ]
    },
    {
      "user_id": "12406255",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12558688",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12406257",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269915",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12406259",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269961",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12269969",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715053"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        }
      ]
    },
    {
      "user_id": "12407908",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510054",
          "section_id": "3715064"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269878",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12269893",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        }
      ]
    },
    {
      "user_id": "12269888",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269926",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715038"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        }
      ]
    },
    {
      "user_id": "12269928",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510137",
          "section_id": "3715132"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "12269897",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510054",
          "section_id": "3715074"
        },
        {
          "course_id": "3510062",
          "section_id": "3715084"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        }
      ]
    },
    {
      "user_id": "12269913",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715056"
        },
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        }
      ]
    },
    {
      "user_id": "12406761",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715043"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715079"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        }
      ]
    },
    {
      "user_id": "12269890",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        }
      ]
    },
    {
      "user_id": "12406227",
      "enrollments": [
        {
          "course_id": "3510031",
          "section_id": "3715033"
        },
        {
          "course_id": "3510038",
          "section_id": "3715048"
        },
        {
          "course_id": "3510054",
          "section_id": "3715070"
        },
        {
          "course_id": "3510062",
          "section_id": "3715089"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510134",
          "section_id": "3715128"
        },
        {
          "course_id": "3510162",
          "section_id": "3715161"
        }
      ]
    },
    {
      "user_id": "8701132",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "8701060",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        }
      ]
    },
    {
      "user_id": "12266829",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "9213304",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        }
      ]
    },
    {
      "user_id": "12266840",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3514085",
          "section_id": "3720079"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "8701110",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        }
      ]
    },
    {
      "user_id": "12266788",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        }
      ]
    },
    {
      "user_id": "12266808",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510104",
          "section_id": "3715217"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3514088",
          "section_id": "3720082"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "9213337",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3514081",
          "section_id": "3720075"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        }
      ]
    },
    {
      "user_id": "8700951",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715108"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "8701129",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715020"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        }
      ]
    },
    {
      "user_id": "12266797",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715105"
        },
        {
          "course_id": "3510136",
          "section_id": "3715163"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715205"
        }
      ]
    },
    {
      "user_id": "9213356",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715101"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510170",
          "section_id": "3715182"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        }
      ]
    },
    {
      "user_id": "9213345",
      "enrollments": [
        {
          "course_id": "3510039",
          "section_id": "3715103"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510157",
          "section_id": "3715171"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3515907",
          "section_id": "3715211"
        }
      ]
    },
    {
      "user_id": "12023171",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023176",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        }
      ]
    },
    {
      "user_id": "12023188",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510099",
          "section_id": "3715210"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12270143",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        }
      ]
    },
    {
      "user_id": "12023138",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023194",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023187",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715066"
        }
      ]
    },
    {
      "user_id": "12269963",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023134",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023232",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12023125",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12269973",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023190",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12023218",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510090",
          "section_id": "3715104"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        }
      ]
    },
    {
      "user_id": "12023226",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12292613",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715149"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023139",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12269876",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715178"
        },
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        }
      ]
    },
    {
      "user_id": "12023121",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715183"
        },
        {
          "course_id": "3510115",
          "section_id": "3715115"
        },
        {
          "course_id": "3510145",
          "section_id": "3715143"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12269970",
      "enrollments": [
        {
          "course_id": "3510045",
          "section_id": "3715181"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "8700952",
      "enrollments": [
        {
          "course_id": "3510050",
          "section_id": "3715113"
        },
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3515907",
          "section_id": "3715211"
        }
      ]
    },
    {
      "user_id": "12266775",
      "enrollments": [
        {
          "course_id": "3510050",
          "section_id": "3715116"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715017"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "8701138",
      "enrollments": [
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510125",
          "section_id": "3715160"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715234"
        }
      ]
    },
    {
      "user_id": "8701141",
      "enrollments": [
        {
          "course_id": "3510050",
          "section_id": "3715118"
        },
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        }
      ]
    },
    {
      "user_id": "8701134",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715123"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715252"
        },
        {
          "course_id": "3510171",
          "section_id": "3715264"
        },
        {
          "course_id": "3510173",
          "section_id": "3715185"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "9213388",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715211"
        }
      ]
    },
    {
      "user_id": "12266791",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715246"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "12266783",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715121"
        },
        {
          "course_id": "3510102",
          "section_id": "3715151"
        },
        {
          "course_id": "3510152",
          "section_id": "3715244"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3516866",
          "section_id": "3715098"
        }
      ]
    },
    {
      "user_id": "8701154",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510171",
          "section_id": "3715023"
        },
        {
          "course_id": "3514054",
          "section_id": "3715238"
        },
        {
          "course_id": "3515907",
          "section_id": "3715208"
        },
        {
          "course_id": "3540478",
          "section_id": "3720074"
        }
      ]
    },
    {
      "user_id": "8700957",
      "enrollments": [
        {
          "course_id": "3510060",
          "section_id": "3715126"
        },
        {
          "course_id": "3510079",
          "section_id": "3715137"
        },
        {
          "course_id": "3510125",
          "section_id": "3715158"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3510157",
          "section_id": "3715169"
        },
        {
          "course_id": "3510171",
          "section_id": "3715266"
        },
        {
          "course_id": "3514054",
          "section_id": "3715236"
        }
      ]
    },
    {
      "user_id": "12420731",
      "enrollments": [
        {
          "course_id": "3510064",
          "section_id": "3715201"
        },
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        }
      ]
    },
    {
      "user_id": "9213223",
      "enrollments": [
        {
          "course_id": "3510070",
          "section_id": "3715133"
        },
        {
          "course_id": "3510079",
          "section_id": "3715140"
        },
        {
          "course_id": "3510152",
          "section_id": "3715248"
        },
        {
          "course_id": "3514057",
          "section_id": "3715240"
        },
        {
          "course_id": "3514084",
          "section_id": "3720078"
        },
        {
          "course_id": "3515907",
          "section_id": "3715216"
        },
        {
          "course_id": "3516863",
          "section_id": "3715091"
        }
      ]
    },
    {
      "user_id": "12023222",
      "enrollments": [
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023200",
      "enrollments": [
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023220",
      "enrollments": [
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023115",
      "enrollments": [
        {
          "course_id": "3510087",
          "section_id": "3715094"
        },
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715175"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023167",
      "enrollments": [
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510112",
          "section_id": "3715111"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510161",
          "section_id": "3715256"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023174",
      "enrollments": [
        {
          "course_id": "3510090",
          "section_id": "3715097"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510161",
          "section_id": "3715258"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516860",
          "section_id": "3715072"
        }
      ]
    },
    {
      "user_id": "12556670",
      "enrollments": [
        {
          "course_id": "3510093",
          "section_id": "3715107"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3516869",
          "section_id": "3715223"
        }
      ]
    },
    {
      "user_id": "12595215",
      "enrollments": [
        {
          "course_id": "3510094",
          "section_id": "3715207"
        },
        {
          "course_id": "3510152",
          "section_id": "3715250"
        },
        {
          "course_id": "3510161",
          "section_id": "3715260"
        },
        {
          "course_id": "3510180",
          "section_id": "3715025"
        },
        {
          "course_id": "3510193",
          "section_id": "3715027"
        },
        {
          "course_id": "3514057",
          "section_id": "3715242"
        }
      ]
    },
    {
      "user_id": "12558038",
      "enrollments": [
        {
          "course_id": "3510099",
          "section_id": "3715210"
        },
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        }
      ]
    },
    {
      "user_id": "12269930",
      "enrollments": [
        {
          "course_id": "3510099",
          "section_id": "3715210"
        },
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3516860",
          "section_id": "3715075"
        }
      ]
    },
    {
      "user_id": "12023211",
      "enrollments": [
        {
          "course_id": "3510117",
          "section_id": "3715119"
        },
        {
          "course_id": "3510145",
          "section_id": "3715139"
        },
        {
          "course_id": "3510154",
          "section_id": "3715153"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715172"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023241",
      "enrollments": [
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510194",
          "section_id": "3715184"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12023124",
      "enrollments": [
        {
          "course_id": "3510120",
          "section_id": "3715124"
        },
        {
          "course_id": "3510145",
          "section_id": "3715135"
        },
        {
          "course_id": "3510154",
          "section_id": "3715146"
        },
        {
          "course_id": "3510161",
          "section_id": "3715262"
        },
        {
          "course_id": "3510169",
          "section_id": "3715168"
        },
        {
          "course_id": "3510186",
          "section_id": "3715180"
        },
        {
          "course_id": "3516857",
          "section_id": "3715067"
        }
      ]
    },
    {
      "user_id": "12556661",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12558033",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556663",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12558687",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556667",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556675",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556679",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510218",
          "section_id": "3715215"
        }
      ]
    },
    {
      "user_id": "12556682",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715190"
        },
        {
          "course_id": "3510190",
          "section_id": "3715193"
        },
        {
          "course_id": "3510197",
          "section_id": "3715199"
        },
        {
          "course_id": "3510203",
          "section_id": "3715206"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    },
    {
      "user_id": "12556684",
      "enrollments": [
        {
          "course_id": "3510162",
          "section_id": "3715165"
        },
        {
          "course_id": "3510182",
          "section_id": "3715188"
        },
        {
          "course_id": "3510190",
          "section_id": "3715196"
        },
        {
          "course_id": "3510197",
          "section_id": "3715202"
        },
        {
          "course_id": "3510203",
          "section_id": "3715204"
        },
        {
          "course_id": "3510217",
          "section_id": "3715209"
        }
      ]
    }
  ],
  "courses": [
    {
      "course_id": "3509873",
      "course_name": "Boundaries: Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38224606",
          "title": "HW: Rough Draft of MA2 DUE",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": "3715016"
            }
          ]
        },
        {
          "assignment_id": "38089973",
          "title": "MA 2 Due",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715016"
            }
          ]
        },
        {
          "assignment_id": "38089968",
          "title": "MA 3 Due",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": "3715016"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715015"
            }
          ]
        },
        {
          "assignment_id": "38104571",
          "title": "MA: \"Where I'm From\" Due",
          "due_dates": [
            {
              "due_date": "2025-03-19",
              "section_id": "3715016"
            },
            {
              "due_date": "2025-03-18",
              "section_id": "3715015"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509874",
      "course_name": "Connections: Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38130569",
          "title": "MA: Where I'm From Poem/DMC ",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": "3715018"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715021"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715019"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509875",
      "course_name": "Chamber Choir (Spring)",
      "mas": [
        {
          "assignment_id": "38090656",
          "title": "MA: Arts Fest - Spring Concert",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38260471",
          "title": "MA: technical rehearsal",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509882",
      "course_name": "Boundaries: Social Science (Spring)",
      "mas": [
        {
          "assignment_id": "38228947",
          "title": "MA 1- Nazi Germany",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": "3715024"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715026"
            }
          ]
        },
        {
          "assignment_id": "38076153",
          "title": "MA 1- Nazi Germany",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38076154",
          "title": "MA 2- Boundaries",
          "due_dates": [
            {
              "due_date": "2025-05-30",
              "section_id": "3715024"
            },
            {
              "due_date": "2025-05-30",
              "section_id": "3715026"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509885",
      "course_name": "Connections: Social Science (Spring)",
      "mas": [
        {
          "assignment_id": "38107954",
          "title": "MA: Research Paper (Final Draft)",
          "due_dates": [
            {
              "due_date": "2025-05-27",
              "section_id": "3715034"
            },
            {
              "due_date": "2025-05-27",
              "section_id": "3715028"
            },
            {
              "due_date": "2025-05-27",
              "section_id": "3715031"
            }
          ]
        },
        {
          "assignment_id": "38109649",
          "title": "MA: India + Globalization In-Class Write",
          "due_dates": [
            {
              "due_date": "2025-05-29",
              "section_id": "3715031"
            },
            {
              "due_date": "2025-05-29",
              "section_id": "3715034"
            },
            {
              "due_date": "2025-05-29",
              "section_id": "3715028"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509891",
      "course_name": "Chamber Music Ensemble (Spring)",
      "mas": [
        {
          "assignment_id": "38104931",
          "title": "MA-HW: End-of-Year Reflection \u2013 Chamber Music Ensemble",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38104919",
          "title": "MA: Final Exam Arts Fest",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509892",
      "course_name": "Digital Filmmaking (Spring)",
      "mas": [
        {
          "assignment_id": "38259125",
          "title": "CW/HW Adobe Premier Pro-Creating Titles Demo 1 and MA project Process Submission ",
          "due_dates": [
            {
              "due_date": "2025-05-16",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38247465",
          "title": "MA Final Project Instruction  ",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": null
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715100"
            }
          ]
        },
        {
          "assignment_id": "38088866",
          "title": "MA: Final Project Submission ",
          "due_dates": [
            {
              "due_date": "2025-03-07",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088811",
          "title": "CW: MA Studio Work Day  ",
          "due_dates": [
            {
              "due_date": "2025-03-03",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088779",
          "title": "CW/HW: Adobe Premier Pro-Color Correction Using Lumetri Tutorial and MA Project Process Submission  ",
          "due_dates": [
            {
              "due_date": "2025-02-27",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088775",
          "title": "CW/HW Adobe Premier Pro-Creating Titles Demo 1 and MA project Process Submission ",
          "due_dates": [
            {
              "due_date": "2025-02-13",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509893",
      "course_name": "Algebra 1 (Spring)",
      "mas": [
        {
          "assignment_id": "38104818",
          "title": "HW: ALEKS Ch 8 MA Review",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715036"
            },
            {
              "due_date": "2025-04-03",
              "section_id": "3715044"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715041"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715039"
            }
          ]
        },
        {
          "assignment_id": "38088239",
          "title": "MA: Chapter 8 Exam",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715036"
            },
            {
              "due_date": "2025-04-03",
              "section_id": "3715044"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715041"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715039"
            }
          ]
        },
        {
          "assignment_id": "38088244",
          "title": "MA: Business Project",
          "due_dates": [
            {
              "due_date": "2025-05-19",
              "section_id": "3715036"
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715044"
            },
            {
              "due_date": "2025-05-20",
              "section_id": "3715041"
            },
            {
              "due_date": "2025-05-20",
              "section_id": "3715039"
            }
          ]
        },
        {
          "assignment_id": "38088249",
          "title": "MA: Data Science Project",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": "3715036"
            },
            {
              "due_date": "2025-06-04",
              "section_id": "3715044"
            },
            {
              "due_date": "2025-06-05",
              "section_id": "3715041"
            },
            {
              "due_date": "2025-06-05",
              "section_id": "3715039"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509895",
      "course_name": "Stagecraft (US) (Spring)",
      "mas": []
    },
    {
      "course_id": "3509898",
      "course_name": "Introduction to String Instruments (Spring)",
      "mas": [
        {
          "assignment_id": "38087984",
          "title": "MA: Student Showcase",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509900",
      "course_name": "Music Production (Spring)",
      "mas": [
        {
          "assignment_id": "38078783",
          "title": "MA: Midterm Written Exam",
          "due_dates": [
            {
              "due_date": "2025-04-25",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38078775",
          "title": "MA: Final Project Due",
          "due_dates": [
            {
              "due_date": "2025-05-30",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38078788",
          "title": "MA: Project Proposal",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38078778",
          "title": "MA: Project Presentation",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509901",
      "course_name": "Mixed Media (US): Materials & Concepts (Spring)",
      "mas": []
    },
    {
      "course_id": "3509902",
      "course_name": "Biology (Spring)",
      "mas": [
        {
          "assignment_id": "38089472",
          "title": "MA: Spring Project",
          "due_dates": [
            {
              "due_date": "2025-05-15"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-06-02"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-06-02"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-15"
            },
            {
              "due_date": "2025-05-15"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-15"
            },
            {
              "due_date": "2025-05-15"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-21"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-06-02"
            },
            {
              "due_date": "2025-06-02"
            },
            {
              "due_date": "2025-06-02"
            },
            {
              "due_date": "2025-05-27"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-05-16"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-05-16"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-30"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-05-14"
            },
            {
              "due_date": "2025-05-14"
            },
            {
              "due_date": "2025-05-14"
            },
            {
              "due_date": "2025-05-14"
            },
            {
              "due_date": "2025-05-16"
            },
            {
              "due_date": "2025-05-16"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-22"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-05-28"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509903",
      "course_name": "Digital Illustration (Spring)",
      "mas": []
    },
    {
      "course_id": "3509904",
      "course_name": "Mixed Media (US): Materials & Concepts (Spring)",
      "mas": []
    },
    {
      "course_id": "3509912",
      "course_name": "Spanish 1 (Spring)",
      "mas": [
        {
          "assignment_id": "38070926",
          "title": "MA: Oral",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715060"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715063"
            }
          ]
        },
        {
          "assignment_id": "38070738",
          "title": "MA FINAL - Oral",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715063"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715060"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509914",
      "course_name": "Programming 2: Object-Oriented Programming (Spring)",
      "mas": [
        {
          "assignment_id": "38085073",
          "title": "MA: Midterm Part 1: Notes Sheet",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715047"
            },
            {
              "due_date": "2025-04-01",
              "section_id": "3715045"
            }
          ]
        },
        {
          "assignment_id": "38085078",
          "title": "MA paper based quiz - Conditionals, Loops, Functions",
          "due_dates": [
            {
              "due_date": "2025-04-05",
              "section_id": "3715047"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715045"
            }
          ]
        },
        {
          "assignment_id": "38085074",
          "title": "MA: Midterm Part 2: Annotations on Midterm",
          "due_dates": [
            {
              "due_date": "2025-04-25",
              "section_id": "3715047"
            },
            {
              "due_date": "2025-04-23",
              "section_id": "3715045"
            }
          ]
        },
        {
          "assignment_id": "38085069",
          "title": "MA: Final Project Part 1: Project Proposal",
          "due_dates": [
            {
              "due_date": "2025-05-22",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085051",
          "title": "MA: Final Project Part 2: Virtual Check-In",
          "due_dates": [
            {
              "due_date": "2025-06-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085070",
          "title": "MA: Final Project Part 3: Coding Interview",
          "due_dates": [
            {
              "due_date": "2025-06-05",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085071",
          "title": "MA: Final Project Part 4: Project Code",
          "due_dates": [
            {
              "due_date": "2025-06-11",
              "section_id": null
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715045"
            },
            {
              "due_date": "2025-06-11",
              "section_id": "3715047"
            }
          ]
        },
        {
          "assignment_id": "38085072",
          "title": "MA: Final Project Part 5: Project Presentation",
          "due_dates": [
            {
              "due_date": "2025-06-11",
              "section_id": null
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715045"
            },
            {
              "due_date": "2025-06-11",
              "section_id": "3715047"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509925",
      "course_name": "Guided Study Hall (Spring)",
      "mas": []
    },
    {
      "course_id": "3509934",
      "course_name": "Physical Education (5/6) (Spring)",
      "mas": []
    },
    {
      "course_id": "3509935",
      "course_name": "Spanish 3 (Spring)",
      "mas": [
        {
          "assignment_id": "38070800",
          "title": "MA: Todas las conjugaciones",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": "3715082"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715078"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715088"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715086"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715081"
            }
          ]
        },
        {
          "assignment_id": "38070798",
          "title": "MA: Final ",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715082"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715078"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715088"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715086"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715081"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509936",
      "course_name": "F period, US PE - (spring)",
      "mas": []
    },
    {
      "course_id": "3509940",
      "course_name": "P.E. Wellness (Spring)",
      "mas": [
        {
          "assignment_id": "38081777",
          "title": "QA: Barrier Breakdown- Fitness SMART Goal",
          "due_dates": [
            {
              "due_date": "2025-04-01",
              "section_id": "3715125"
            },
            {
              "due_date": "2025-03-29",
              "section_id": "3715122"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509944",
      "course_name": "P.E. Yoga (US) (Spring)",
      "mas": [
        {
          "assignment_id": "38086101",
          "title": "Yoga class #9 - MA work period",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38086498",
          "title": "MA: Student Led Yoga",
          "due_dates": [
            {
              "due_date": "2025-05-06"
            },
            {
              "due_date": "2025-05-16"
            },
            {
              "due_date": "2025-06-03"
            },
            {
              "due_date": "2025-05-20"
            },
            {
              "due_date": "2025-05-28"
            },
            {
              "due_date": "2025-04-29"
            },
            {
              "due_date": "2025-05-08"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509949",
      "course_name": "A period, US CTMP - (spring)",
      "mas": [
        {
          "assignment_id": "38092989",
          "title": "MA: (homework) Final assessment & presentation - Goal Identification, tracking and reflection.",
          "due_dates": [
            {
              "due_date": "2025-05-27",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509958",
      "course_name": "Postmodern Theory and Literature (Spring)",
      "mas": []
    },
    {
      "course_id": "3509963",
      "course_name": "Physical Meets Digital (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38060068",
          "title": "MA: PMD Meets Your Flow",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": "3715136"
            },
            {
              "due_date": "2025-04-01",
              "section_id": "3715134"
            },
            {
              "due_date": "2025-04-03",
              "student_ids": [
                "9213194",
                "9213354",
                "11992355"
              ]
            },
            {
              "due_date": "2025-04-03",
              "student_ids": [
                "12413838"
              ]
            }
          ]
        },
        {
          "assignment_id": "38060066",
          "title": "MA Pt. 2: Touchless Sensor (Video): Canvas video submission",
          "due_dates": [
            {
              "due_date": "2025-02-10",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060069",
          "title": "MA: Create an Arduino device to help your classmate: Text + Video Submission",
          "due_dates": [
            {
              "due_date": "2025-05-17",
              "section_id": "3715136"
            },
            {
              "due_date": "2025-05-16",
              "section_id": "3715134"
            },
            {
              "due_date": "2025-05-20",
              "student_ids": [
                "12413838"
              ]
            },
            {
              "due_date": "2025-05-17",
              "student_ids": [
                "9213354"
              ]
            }
          ]
        },
        {
          "assignment_id": "38060061",
          "title": "MA CW\\HW: Final Project Prototype and Test #1 - Highest risk area",
          "due_dates": [
            {
              "due_date": "2025-02-13",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060063",
          "title": "MA HW: Final Project Prototype and Test #2 - Build MVP, Get feedback from a real customer",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060067",
          "title": "MA [Main and Final]: Help Your Community Final Project (text + video submission)",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": "3715136"
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715134"
            }
          ]
        },
        {
          "assignment_id": "38060065",
          "title": "MA Pt 2 [Video]: Help Your Community Final Project (Canvas video submission)",
          "due_dates": [
            {
              "due_date": "2025-02-19",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060064",
          "title": "MA Live Demo Presentation",
          "due_dates": [
            {
              "due_date": "2025-02-21",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060033",
          "title": "Exit Ticket - Flow MA",
          "due_dates": [
            {
              "due_date": "2025-03-27",
              "section_id": "3715136"
            },
            {
              "due_date": "2025-03-26",
              "section_id": "3715134"
            }
          ]
        },
        {
          "assignment_id": "38237287",
          "title": "Exit Ticket Day 15 - MA spec",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": "3715134"
            },
            {
              "due_date": "2025-05-06",
              "section_id": "3715136"
            }
          ]
        },
        {
          "assignment_id": "38060022",
          "title": "Exit Ticket - Midterm MA progress",
          "due_dates": [
            {
              "due_date": "2025-05-14",
              "section_id": "3715136"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715134"
            }
          ]
        },
        {
          "assignment_id": "38060040",
          "title": "Exit Ticket - MA spec",
          "due_dates": [
            {
              "due_date": "2025-02-13",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060039",
          "title": "Exit Ticket - MA prototype",
          "due_dates": [
            {
              "due_date": "2025-02-11",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060041",
          "title": "Exit Ticket - MA work time",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060042",
          "title": "Exit Ticket - MA work time",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060037",
          "title": "Exit Ticket - MA (sub day)",
          "due_dates": [
            {
              "due_date": "2025-02-14",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060034",
          "title": "Exit Ticket - MA",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060035",
          "title": "Exit Ticket - MA",
          "due_dates": [
            {
              "due_date": "2025-02-14",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38060036",
          "title": "Exit Ticket - MA (final work period)",
          "due_dates": [
            {
              "due_date": "2025-02-18",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509964",
      "course_name": "Postmodern Theory and Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38088255",
          "title": "MA:  Postmodern Term Presentation",
          "due_dates": [
            {
              "due_date": "2025-03-27",
              "section_id": "3715062"
            }
          ]
        },
        {
          "assignment_id": "38088257",
          "title": "MA: Cyberpunk Short Story",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": "3715062"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509966",
      "course_name": "Literary Thinking 1 (Spring)",
      "mas": [
        {
          "assignment_id": "38091284",
          "title": "MA: final draft of EPS Myth",
          "due_dates": [
            {
              "due_date": "2025-03-31",
              "section_id": "3715243"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715241"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715245"
            }
          ]
        },
        {
          "assignment_id": "38086661",
          "title": "MA: EPS Myth",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509968",
      "course_name": "Modern Mythology in American Film (Spring)",
      "mas": [
        {
          "assignment_id": "38086817",
          "title": "MA #1: Independent Film Review",
          "due_dates": [
            {
              "due_date": "2025-04-05",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38086819",
          "title": "MA #3: Final Project",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38086818",
          "title": "MA #2: Independent Film Review",
          "due_dates": [
            {
              "due_date": "2025-05-09",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509972",
      "course_name": "Postmodern Theory and Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38086207",
          "title": "MA: Terms",
          "due_dates": [
            {
              "due_date": "2025-03-31",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38086210",
          "title": "MA: Severance",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085136",
          "title": "MA: Final Project",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509977",
      "course_name": "Postmodern Theory and Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38116408",
          "title": "HW: Read Your Source(s) for MA #1",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715068"
            },
            {
              "due_date": "2025-03-25",
              "section_id": "3715069"
            }
          ]
        },
        {
          "assignment_id": "38089178",
          "title": "MA #1: Postmodern Vocab Virtual Encyclopedia Entry",
          "due_dates": [
            {
              "due_date": "2025-03-26",
              "section_id": "3715068"
            },
            {
              "due_date": "2025-03-27",
              "section_id": "3715069"
            }
          ]
        },
        {
          "assignment_id": "38089186",
          "title": "MA #2: Cyberpunk Story",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": "3715068"
            },
            {
              "due_date": "2025-05-06",
              "section_id": "3715069"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509978",
      "course_name": "Historical Thinking 1 (Spring)",
      "mas": [
        {
          "assignment_id": "38091223",
          "title": "MA: Chinese immigration presentations",
          "due_dates": [
            {
              "due_date": "2025-03-26",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38091230",
          "title": "MA: Country/Religion/Other Choice Presentations + Chinese Comparison",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509990",
      "course_name": "Mathematical Thinking 1 (Spring)",
      "mas": [
        {
          "assignment_id": "38075401",
          "title": "MA: Unit 5 Exam",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38075412",
          "title": "MA: Unit 6 Exam",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38075418",
          "title": "MA: Unit 6 Project",
          "due_dates": [
            {
              "due_date": "2025-06-05",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3509999",
      "course_name": "Scientific Thinking 1 (Spring)",
      "mas": []
    },
    {
      "course_id": "3510004",
      "course_name": "Modern Latin American Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38233077",
          "title": "MA: House of the Spirits",
          "due_dates": [
            {
              "due_date": "2025-05-21",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38215566",
          "title": "MA: Engagement and Participation ",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38215570",
          "title": "MA: Engagement and Participation ",
          "due_dates": [
            {
              "due_date": "2025-04-28",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510008",
      "course_name": "Modern African Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38215567",
          "title": "MA: Engagement and Participation ",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38233076",
          "title": "MA: Purple Hibiscus & African Literature/History",
          "due_dates": [
            {
              "due_date": "2025-05-22",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38215571",
          "title": "MA: Engagement and Participation [mid term]",
          "due_dates": [
            {
              "due_date": "2025-04-29",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510009",
      "course_name": "Speaking Spanish (Grade 6) (Spring)",
      "mas": []
    },
    {
      "course_id": "3510010",
      "course_name": "Democratic Theories and Civic Practices (Spring)",
      "mas": [
        {
          "assignment_id": "38083635",
          "title": "MA #1: Democratic Systems Exam",
          "due_dates": [
            {
              "due_date": "2025-05-09",
              "section_id": "3715436"
            },
            {
              "due_date": "2025-05-09",
              "student_ids": [
                "8314120",
                "8314126",
                "8314200",
                "8700949",
                "8701126",
                "11992323",
                "11992329",
                "12266806",
                "12272015",
                "12413836"
              ]
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510013",
      "course_name": "Modern Middle-Eastern Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38026329",
          "title": "MA: Graphic Novel Project",
          "due_dates": [
            {
              "due_date": "2025-04-25",
              "section_id": "3715155"
            },
            {
              "due_date": "2025-04-24",
              "section_id": "3715159"
            },
            {
              "due_date": "2025-04-25",
              "section_id": "3715162"
            }
          ]
        },
        {
          "assignment_id": "38084091",
          "title": "MA: Group Presentation on Story & Country Culture",
          "due_dates": [
            {
              "due_date": "2025-05-06",
              "student_ids": [
                "9213245",
                "9213354",
                "9213377",
                "9213400",
                "9213406",
                "10060331",
                "12396724",
                "12396733",
                "12403883"
              ]
            },
            {
              "due_date": "2025-05-05",
              "student_ids": [
                "9213297",
                "10060314",
                "10060326",
                "12586811"
              ]
            },
            {
              "due_date": "2025-05-08",
              "student_ids": [
                "9213192",
                "9213352",
                "9213378",
                "10060322",
                "10060346",
                "10060353",
                "12396730",
                "12396743",
                "12419504"
              ]
            },
            {
              "due_date": "2025-05-09",
              "student_ids": [
                "9213366",
                "12396721",
                "12396748",
                "12413839",
                "12419502"
              ]
            },
            {
              "due_date": "2025-05-12",
              "student_ids": [
                "9213191",
                "9213195",
                "9213197",
                "9213204",
                "9213284",
                "10060366",
                "12396723",
                "12396744",
                "12403882"
              ]
            },
            {
              "due_date": "2025-05-14",
              "student_ids": [
                "9213196",
                "9213403",
                "10060330",
                "10060333",
                "10060344",
                "12396722",
                "12396735",
                "12396749"
              ]
            },
            {
              "due_date": "2025-05-07",
              "student_ids": [
                "9213186",
                "9213310",
                "12396734",
                "12396741"
              ]
            },
            {
              "due_date": "2025-05-13",
              "student_ids": [
                "9213365",
                "12269956",
                "12399546",
                "12638778"
              ]
            }
          ]
        },
        {
          "assignment_id": "38084096",
          "title": "MA: Model UN Final",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715405"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510014",
      "course_name": "Law and Justice (Spring)",
      "mas": [
        {
          "assignment_id": "38083005",
          "title": "MA: Module I Test",
          "due_dates": [
            {
              "due_date": "2025-04-04",
              "section_id": "3715077"
            }
          ]
        },
        {
          "assignment_id": "38164233",
          "title": "MA: Module I Test Section I",
          "due_dates": [
            {
              "due_date": "2025-04-04",
              "section_id": "3715076"
            }
          ]
        },
        {
          "assignment_id": "38164240",
          "title": "MA: Sections II and III Upload HERE",
          "due_dates": [
            {
              "due_date": "2025-04-04",
              "section_id": "3715076"
            }
          ]
        },
        {
          "assignment_id": "38083010",
          "title": "MA: Topic 1 Legal Memo",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": "3715076"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715077"
            },
            {
              "due_date": "2025-05-10",
              "student_ids": [
                "11992369"
              ]
            },
            {
              "due_date": "2025-05-11",
              "student_ids": [
                "12266833"
              ]
            }
          ]
        },
        {
          "assignment_id": "38083013",
          "title": "MA: Topic 2 Legal Memo",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": "3715077"
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715076"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510019",
      "course_name": "Public Policy (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38080745",
          "title": "MA: Test on Key Concepts from Public Policy",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": "3715080"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715083"
            },
            {
              "due_date": "2025-04-23",
              "student_ids": [
                "11992331"
              ]
            }
          ]
        },
        {
          "assignment_id": "38080746",
          "title": "MA: Policy Memo on Proposed Permanent Supportive Housing Initiative (EPS and La Quinta)",
          "due_dates": [
            {
              "due_date": "2025-05-06",
              "section_id": "3715080"
            },
            {
              "due_date": "2025-05-06",
              "section_id": "3715083"
            }
          ]
        },
        {
          "assignment_id": "38080748",
          "title": "MA: Combined Policy Memo and Legal Brief with Law and Justice",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": "3715083"
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715080"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510024",
      "course_name": "BOTZ (Spring)",
      "mas": []
    },
    {
      "course_id": "3510029",
      "course_name": "Modern Latin American History (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38087176",
          "title": "MA: Presentation on Post-Independence 19th Century Nation Building",
          "due_dates": [
            {
              "due_date": "2025-03-25",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087137",
          "title": "MA: Cumulative Essay for Modern Latin American History",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087142",
          "title": "MA: Source Analysis Test on American Influence over Latin America (20th and 21st Centuries)",
          "due_dates": [
            {
              "due_date": "2025-05-22",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087100",
          "title": "MA: 10th Grade Humanities Final - United Nations Resolution and Speech",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510030",
      "course_name": "Pre-Calculus (Spring)",
      "mas": [
        {
          "assignment_id": "38070924",
          "title": "MA: Test on Sequences and Series",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": "3715090"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715085"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715099"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715092"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715087"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715095"
            }
          ]
        },
        {
          "assignment_id": "38070927",
          "title": "MA: Test on Probability",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": "3715099"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715090"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715085"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715092"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715087"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715095"
            }
          ]
        },
        {
          "assignment_id": "38125781",
          "title": "HW Day 6: MA 1 Review",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": "3715090"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715085"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715099"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715092"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715087"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715095"
            }
          ]
        },
        {
          "assignment_id": "38070939",
          "title": "MA: Final Exam",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715090"
            },
            {
              "due_date": "2025-06-07",
              "section_id": "3715085"
            },
            {
              "due_date": "2025-06-07",
              "section_id": "3715099"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715092"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715087"
            },
            {
              "due_date": "2025-06-11",
              "section_id": "3715095"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510031",
      "course_name": "Literary Thinking 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38070912",
          "title": "HW: Gather and Submit Evidence for MA",
          "due_dates": [
            {
              "due_date": "2025-03-13",
              "section_id": null
            },
            {
              "due_date": "2025-03-12",
              "section_id": "3715043"
            },
            {
              "due_date": "2025-03-13",
              "section_id": "3715038"
            },
            {
              "due_date": "2025-03-13",
              "section_id": "3715033"
            }
          ]
        },
        {
          "assignment_id": "38070884",
          "title": "MA: Short Story Element Essay",
          "due_dates": [
            {
              "due_date": "2025-03-19",
              "section_id": null
            },
            {
              "due_date": "2025-03-18",
              "section_id": "3715043"
            },
            {
              "due_date": "2025-03-19",
              "section_id": "3715038"
            },
            {
              "due_date": "2025-03-19",
              "section_id": "3715033"
            }
          ]
        },
        {
          "assignment_id": "38138018",
          "title": "MA: IRP Introduction, Questions, Interactions",
          "due_dates": [
            {
              "due_date": "2025-05-14",
              "section_id": null
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715038"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715033"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715043"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510032",
      "course_name": "Modern African History (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38087111",
          "title": "MA: Research Poster on Colonial Society",
          "due_dates": [
            {
              "due_date": "2025-04-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087128",
          "title": "MA: Presentation on Independence of Modern African Nations",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": null
            },
            {
              "due_date": "2025-04-30",
              "student_ids": [
                "10060360",
                "10060370",
                "12396726",
                "12396736",
                "12396737",
                "12396742"
              ]
            }
          ]
        },
        {
          "assignment_id": "38087134",
          "title": "MA: Cumulative Essay for Modern African History",
          "due_dates": [
            {
              "due_date": "2025-05-19",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087099",
          "title": "MA: 10th Grade Humanities Final - United Nations Resolution and Speech",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510035",
      "course_name": "Modern Middle-Eastern History (Spring)",
      "mas": [
        {
          "assignment_id": "38081300",
          "title": "HW: MA Prep & Notes",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715176"
            },
            {
              "due_date": "2025-03-25",
              "section_id": "3715173"
            },
            {
              "due_date": "2025-03-24",
              "section_id": "3715170"
            }
          ]
        },
        {
          "assignment_id": "38130212",
          "title": "MA1: Test on the Iranian Revolution",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715170"
            },
            {
              "due_date": "2025-03-24",
              "section_id": "3715176"
            },
            {
              "due_date": "2025-03-25",
              "section_id": "3715173"
            },
            {
              "due_date": "2025-03-25",
              "student_ids": [
                "12396735"
              ]
            },
            {
              "due_date": "2025-03-26",
              "student_ids": [
                "9213354"
              ]
            },
            {
              "due_date": "2025-04-04",
              "student_ids": [
                "9213191",
                "9213196",
                "10060314",
                "12269956",
                "12396744",
                "12399546"
              ]
            }
          ]
        },
        {
          "assignment_id": "38081304",
          "title": "MA 2 Nation-States",
          "due_dates": [
            {
              "due_date": "2025-05-10",
              "section_id": "3715176"
            },
            {
              "due_date": "2025-05-10",
              "section_id": "3715173"
            },
            {
              "due_date": "2025-05-10",
              "section_id": "3715170"
            },
            {
              "due_date": "2025-05-15",
              "student_ids": [
                "9213186",
                "9213284",
                "9213297",
                "9213377",
                "12396722"
              ]
            },
            {
              "due_date": "2025-05-14",
              "student_ids": [
                "9213195",
                "9213354",
                "9213400",
                "9213403",
                "10060314",
                "12396721",
                "12396741",
                "12396748"
              ]
            },
            {
              "due_date": "2025-05-17",
              "student_ids": [
                "9213191",
                "9213197",
                "9213204",
                "9213352",
                "9213365",
                "9213406",
                "10060322",
                "10060326",
                "10060331",
                "12269956",
                "12396734",
                "12396735",
                "12413839",
                "12419504"
              ]
            },
            {
              "due_date": "2025-05-16",
              "student_ids": [
                "12396724",
                "12403883"
              ]
            },
            {
              "due_date": "2025-05-13",
              "student_ids": [
                "9213192",
                "10060330",
                "10060333",
                "10060346",
                "12396743",
                "12399546",
                "12403882",
                "12419502",
                "12586811"
              ]
            },
            {
              "due_date": "2025-05-15",
              "student_ids": [
                "12396733"
              ]
            }
          ]
        },
        {
          "assignment_id": "38081305",
          "title": "MA 3- Israel-Palestine",
          "due_dates": [
            {
              "due_date": "2025-05-21",
              "section_id": "3715176"
            },
            {
              "due_date": "2025-05-22",
              "section_id": "3715173"
            },
            {
              "due_date": "2025-05-21",
              "section_id": "3715170"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510038",
      "course_name": "Historical Thinking 2 (Spring)",
      "mas": []
    },
    {
      "course_id": "3510039",
      "course_name": "Calculus (Spring)",
      "mas": [
        {
          "assignment_id": "38098781",
          "title": "MA1: Indefinite Integrals + L'Hopital's Rule",
          "due_dates": [
            {
              "due_date": "2025-04-01",
              "section_id": "3715105"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715103"
            },
            {
              "due_date": "2025-04-01",
              "section_id": "3715101"
            }
          ]
        },
        {
          "assignment_id": "38098783",
          "title": "MA2: Definite Integrals ",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": "3715101"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715105"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715103"
            }
          ]
        },
        {
          "assignment_id": "38099391",
          "title": "MA1: Definite Integrals",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715110"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715108"
            }
          ]
        },
        {
          "assignment_id": "38099394",
          "title": "MA2: Integration Using Substitution",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": "3715108"
            },
            {
              "due_date": "2025-05-07",
              "section_id": "3715110"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510045",
      "course_name": "Geometry (Spring)",
      "mas": [
        {
          "assignment_id": "38104280",
          "title": "HW: ALEKS Ch 7 MA Review",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-03-25",
              "section_id": "3715178"
            },
            {
              "due_date": "2025-03-24",
              "section_id": "3715181"
            }
          ]
        },
        {
          "assignment_id": "38236611",
          "title": "HW: ALEKS Ch 6 MA Review (Skip #1-6)",
          "due_dates": [
            {
              "due_date": "2025-05-07",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-05-07",
              "section_id": "3715181"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715178"
            }
          ]
        },
        {
          "assignment_id": "38087772",
          "title": "MA: Chapter 7",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-03-24",
              "section_id": "3715181"
            },
            {
              "due_date": "2025-03-25",
              "section_id": "3715178"
            }
          ]
        },
        {
          "assignment_id": "38087775",
          "title": "MA: Chapter 6",
          "due_dates": [
            {
              "due_date": "2025-05-07",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-05-07",
              "section_id": "3715181"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715178"
            }
          ]
        },
        {
          "assignment_id": "38088209",
          "title": "MA: Kite Project",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-04-23",
              "section_id": "3715181"
            },
            {
              "due_date": "2025-04-23",
              "section_id": "3715178"
            }
          ]
        },
        {
          "assignment_id": "38087791",
          "title": "MA: Final Exam",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715183"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715181"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715178"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510047",
      "course_name": "Mathematical Thinking 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38088264",
          "title": "MA: Unit 5 Exam",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088265",
          "title": "MA: Unit 5 Project Green Thumb",
          "due_dates": [
            {
              "due_date": "2025-05-15",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088260",
          "title": "MA: Unit 6 Project Games Carnival",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510050",
      "course_name": "Statistics (Spring)",
      "mas": [
        {
          "assignment_id": "38082993",
          "title": "MA: Project 7 - Testing Claims About a Proportion",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715116"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715118"
            },
            {
              "due_date": "2025-04-03",
              "section_id": "3715113"
            }
          ]
        },
        {
          "assignment_id": "38082994",
          "title": "MA: Project 8 - Testing Claims About Means",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": "3715113"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715116"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715118"
            }
          ]
        },
        {
          "assignment_id": "38082995",
          "title": "MA: Project 9 - Inference for Distributions and Relationships",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715113"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715116"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715118"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510054",
      "course_name": "Scientific Thinking 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38082414",
          "title": "MA: Too Cold for Comfort Write-Up",
          "due_dates": [
            {
              "due_date": "2025-03-18",
              "section_id": null
            },
            {
              "due_date": "2025-03-18",
              "section_id": "3715064"
            },
            {
              "due_date": "2025-03-18",
              "section_id": "3715070"
            }
          ]
        },
        {
          "assignment_id": "38082413",
          "title": "MA: Quiz #6",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38082412",
          "title": "MA: Nervous System Presentation",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510055",
      "course_name": "Chemistry (Spring)",
      "mas": [
        {
          "assignment_id": "38076262",
          "title": "MA: Drug Model",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38076278",
          "title": "MA: Drug Info Reel",
          "due_dates": [
            {
              "due_date": "2025-05-22",
              "section_id": "3715197"
            },
            {
              "due_date": "2025-05-22",
              "section_id": "3715192"
            },
            {
              "due_date": "2025-05-21",
              "section_id": "3715186"
            },
            {
              "due_date": "2025-05-22",
              "section_id": "3715194"
            },
            {
              "due_date": "2025-05-22",
              "section_id": "3715189"
            }
          ]
        },
        {
          "assignment_id": "38076256",
          "title": "MA: Midterm Exam",
          "due_dates": [
            {
              "due_date": "2025-04-04",
              "section_id": "3715192"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715194"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715197"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715189"
            },
            {
              "due_date": "2025-04-03",
              "section_id": "3715186"
            }
          ]
        },
        {
          "assignment_id": "38072981",
          "title": "MA: Cumulative Final",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715186"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715194"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715197"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715192"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715189"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510060",
      "course_name": "Advanced Calculus (Spring)",
      "mas": [
        {
          "assignment_id": "38223583",
          "title": "MA: Test on matrix transformations",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": "3715121"
            },
            {
              "due_date": "2025-05-13",
              "section_id": "3715123"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715126"
            },
            {
              "due_date": "2025-05-14",
              "section_id": "3715129"
            }
          ]
        },
        {
          "assignment_id": "38250470",
          "title": "MA: Final Quiz on Complex Numbers",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715123"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715126"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715129"
            },
            {
              "due_date": "2025-06-07",
              "section_id": "3715121"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510062",
      "course_name": "Speaking Spanish (Grade 7) (Spring)",
      "mas": [
        {
          "assignment_id": "38090028",
          "title": "MA: Quiero viajar a...",
          "due_dates": [
            {
              "due_date": "2025-03-26",
              "section_id": "3715089"
            },
            {
              "due_date": "2025-03-27",
              "section_id": "3715079"
            },
            {
              "due_date": "2025-03-26",
              "section_id": "3715084"
            }
          ]
        },
        {
          "assignment_id": "38090027",
          "title": "MA: BBvY- Study Guide",
          "due_dates": [
            {
              "due_date": "2025-05-15",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38090008",
          "title": "MA: 'BBvY'",
          "due_dates": [
            {
              "due_date": "2025-05-15",
              "section_id": "3715089"
            },
            {
              "due_date": "2025-05-15",
              "section_id": "3715084"
            },
            {
              "due_date": "2025-05-16",
              "section_id": "3715079"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510064",
      "course_name": "Spanish 2: Foundations (Spring)",
      "mas": [
        {
          "assignment_id": "38088355",
          "title": "MA: Midterm Escuchar y Escribir",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": "3715201"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715203"
            }
          ]
        },
        {
          "assignment_id": "38088354",
          "title": "MA: \u00a1Fui a Espa\u00f1a!",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715201"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715203"
            }
          ]
        },
        {
          "assignment_id": "38261266",
          "title": "MA: Final Project Reflection",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715201"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715203"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510070",
      "course_name": "Advanced Topics in Mathematics (Spring)",
      "mas": [
        {
          "assignment_id": "38067389",
          "title": "MA: Test on Game Theory",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": "3715131"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715133"
            }
          ]
        },
        {
          "assignment_id": "38067388",
          "title": "MA: Test on Topology",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": "3715131"
            },
            {
              "due_date": "2025-05-06",
              "section_id": "3715133"
            }
          ]
        },
        {
          "assignment_id": "38067780",
          "title": "MA: Test on Multivariable Calculus",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": "3715131"
            },
            {
              "due_date": "2025-05-28",
              "section_id": "3715133"
            }
          ]
        },
        {
          "assignment_id": "38067387",
          "title": "MA: Final Project",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715133"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715131"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510079",
      "course_name": "Advanced Chemistry (Spring)",
      "mas": [
        {
          "assignment_id": "38073009",
          "title": "MA: Electrochemistry Celebration of Knowledge",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": "3715140"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715137"
            }
          ]
        },
        {
          "assignment_id": "38075413",
          "title": "MA: ULTIMATE CELEBRATION OF KNOWLEDGE",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715140"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715137"
            }
          ]
        },
        {
          "assignment_id": "38075385",
          "title": "MA: Research Project Lab Report",
          "due_dates": [
            {
              "due_date": "2025-05-29",
              "section_id": "3715140"
            },
            {
              "due_date": "2025-05-29",
              "section_id": "3715137"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510087",
      "course_name": "Acting: One Acts (Spring)",
      "mas": [
        {
          "assignment_id": "38086781",
          "title": "CW/MA: Open Scenes",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510090",
      "course_name": "Mixed Media (7/8): Exploration & Application (Spring)",
      "mas": []
    },
    {
      "course_id": "3510092",
      "course_name": "Organic Chemistry (Spring)",
      "mas": [
        {
          "assignment_id": "38081542",
          "title": "MA: Addition and Alcohol Reactions",
          "due_dates": [
            {
              "due_date": "2025-04-04",
              "section_id": "3715142"
            },
            {
              "due_date": "2025-04-04",
              "section_id": "3715145"
            }
          ]
        },
        {
          "assignment_id": "38081543",
          "title": "MA: Aromaticity and EAS Reactions",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": "3715142"
            },
            {
              "due_date": "2025-05-28",
              "section_id": "3715145"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510093",
      "course_name": "Choir (7/8) (Spring)",
      "mas": [
        {
          "assignment_id": "38088138",
          "title": "MA: Sing at EPS Arts Fest!",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510094",
      "course_name": "Directing (Spring)",
      "mas": [
        {
          "assignment_id": "38084970",
          "title": "MA: Director's Note",
          "due_dates": [
            {
              "due_date": "2025-05-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510099",
      "course_name": "Rock Orchestra (Spring)",
      "mas": [
        {
          "assignment_id": "38084661",
          "title": "MA: Concert Reflection",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38084662",
          "title": "MA: Final Exam - End of term performance",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510101",
      "course_name": "Paper Engineering (Spring)",
      "mas": []
    },
    {
      "course_id": "3510102",
      "course_name": "Advanced Biology (Spring)",
      "mas": [
        {
          "assignment_id": "38083070",
          "title": "MA: Exam One",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38083071",
          "title": "MA: Exam Two",
          "due_dates": [
            {
              "due_date": "2025-05-09",
              "section_id": "3715151"
            },
            {
              "due_date": "2025-05-09",
              "section_id": "3715148"
            }
          ]
        },
        {
          "assignment_id": "38083072",
          "title": "MA: Independent Inquiry",
          "due_dates": [
            {
              "due_date": "2025-05-21",
              "section_id": "3715151"
            },
            {
              "due_date": "2025-05-21",
              "section_id": "3715148"
            }
          ]
        },
        {
          "assignment_id": "38083073",
          "title": "MA:  Final Exam",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510104",
      "course_name": "Digital Photography (Spring)",
      "mas": [
        {
          "assignment_id": "38083576",
          "title": "MA: Photographic Scavenger Hunt ",
          "due_dates": [
            {
              "due_date": "2025-04-24",
              "section_id": null
            },
            {
              "due_date": "2025-04-24",
              "section_id": "3715214"
            },
            {
              "due_date": "2025-04-24",
              "section_id": "3715217"
            }
          ]
        },
        {
          "assignment_id": "38083577",
          "title": "MA: Photographing COLOR",
          "due_dates": [
            {
              "due_date": "2025-05-06",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38083574",
          "title": "MA: Fine Arts Package",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715214"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715217"
            }
          ]
        },
        {
          "assignment_id": "38083575",
          "title": "MA: Photographing Motion",
          "due_dates": [
            {
              "due_date": "2025-05-17",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510111",
      "course_name": "Advanced Physics (Spring)",
      "mas": [
        {
          "assignment_id": "38067329",
          "title": "MA: #2 - Quantum Physics",
          "due_dates": [
            {
              "due_date": "2025-05-19",
              "section_id": "3715156"
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715154"
            }
          ]
        },
        {
          "assignment_id": "38067330",
          "title": "MA: #3 Symposium: Relativity or Quantum Mechanics in Popular Media",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715448"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510112",
      "course_name": "B period, 7/8 PE - (spring)",
      "mas": []
    },
    {
      "course_id": "3510115",
      "course_name": "Physical Education (7/8) (Spring)",
      "mas": []
    },
    {
      "course_id": "3510117",
      "course_name": "P.E. Yoga (7/8) (Spring)",
      "mas": [
        {
          "assignment_id": "38086549",
          "title": "MA: Student Led Yoga",
          "due_dates": [
            {
              "due_date": "2025-05-09"
            },
            {
              "due_date": "2025-05-05"
            },
            {
              "due_date": "2025-05-13"
            },
            {
              "due_date": "2025-05-19"
            },
            {
              "due_date": "2025-05-29"
            },
            {
              "due_date": "2025-05-07"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510120",
      "course_name": "E period, 7/8 CTMP - (spring)",
      "mas": [
        {
          "assignment_id": "38086583",
          "title": "MA: (homework) Final assessment & presentation - Goal Identification, tracking and reflection.",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510124",
      "course_name": "Programming 1: Introduction to Programming (Spring)",
      "mas": [
        {
          "assignment_id": "38051869",
          "title": "MA: Midterm Project Part 1: Virtual Pet Specification (CW/HW)",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051870",
          "title": "MA: Midterm Project Part 2: Virtual Pet Skeleton (CW/HW)",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051871",
          "title": "MA: Midterm Project Part 3: Virtual Pet Final Copy (CW/HW)",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051861",
          "title": "MA: Final Project Part 1 - Specification",
          "due_dates": [
            {
              "due_date": "2025-05-16",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051862",
          "title": "MA: Final Project Part 2 -  UI",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051863",
          "title": "MA: Final Project Part 3 - Callbacks",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051864",
          "title": "MA: Final Project Part 4 - MVP",
          "due_dates": [
            {
              "due_date": "2025-05-30",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38051865",
          "title": "MA: Final Project Part 5 - FINAL Code Turn-In",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510125",
      "course_name": "Advanced Spanish: Language (Spring)",
      "mas": [
        {
          "assignment_id": "38070831",
          "title": "MA: Prueba de Gram\u00e1tica P.1, P.2, P.3, \u00a1OJO! 8 y 9",
          "due_dates": [
            {
              "due_date": "2025-03-26",
              "section_id": "3715158"
            },
            {
              "due_date": "2025-03-26",
              "section_id": "3715160"
            }
          ]
        },
        {
          "assignment_id": "38070832",
          "title": "MA: Prueba de Gram\u00e1tica P.4, P.5, \u00a1OJO! 10 y 11",
          "due_dates": [
            {
              "due_date": "2025-05-07",
              "section_id": "3715158"
            },
            {
              "due_date": "2025-05-07",
              "section_id": "3715160"
            }
          ]
        },
        {
          "assignment_id": "38070833",
          "title": "MA: (CW:) Escritura en clase: Escribir una f\u00e1bula",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": "3715158"
            },
            {
              "due_date": "2025-04-03",
              "section_id": "3715160"
            }
          ]
        },
        {
          "assignment_id": "38070829",
          "title": "MA: (CW): Mesa redonda - estrategias para navegar la deforestaci\u00f3n en Ecuador",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": "3715158"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715160"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510127",
      "course_name": "Truth in Film: The Crafting of Reality (Spring)",
      "mas": [
        {
          "assignment_id": "38094320",
          "title": "MA: [Present] What Do You See...",
          "due_dates": [
            {
              "due_date": "2025-04-22"
            },
            {
              "due_date": "2025-03-26"
            },
            {
              "due_date": "2025-03-28"
            },
            {
              "due_date": "2025-04-01"
            },
            {
              "due_date": "2025-04-03"
            },
            {
              "due_date": "2025-03-24"
            },
            {
              "due_date": "2025-03-20"
            }
          ]
        },
        {
          "assignment_id": "38104478",
          "title": "MA: [Review] Documentary Film",
          "due_dates": [
            {
              "due_date": "2025-04-28",
              "student_ids": [
                "8314114",
                "10060324"
              ]
            },
            {
              "due_date": "2025-04-24",
              "student_ids": [
                "12403882",
                "12552301"
              ]
            },
            {
              "due_date": "2025-05-05",
              "student_ids": [
                "8700956",
                "12552283"
              ]
            },
            {
              "due_date": "2025-05-07",
              "student_ids": [
                "8701106",
                "12023215"
              ]
            },
            {
              "due_date": "2025-05-09",
              "student_ids": [
                "8314056",
                "12023202"
              ]
            },
            {
              "due_date": "2025-05-13",
              "student_ids": [
                "9213245",
                "11992331"
              ]
            },
            {
              "due_date": "2025-05-15",
              "student_ids": [
                "12023191",
                "12552284"
              ]
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510134",
      "course_name": "Environmental Practices: Local Studies (Spring)",
      "mas": [
        {
          "assignment_id": "38087228",
          "title": "MA:  Plant Identification Test",
          "due_dates": [
            {
              "due_date": "2025-04-28",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087227",
          "title": "MA:  Cochran Springs & Yarrow Creek Stream Health Lab",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38087229",
          "title": "MA:  Stream Lab Presentation",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510136",
      "course_name": "Advanced Spanish: Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38088762",
          "title": "MA: Imitaci\u00f3n creativa de COMO AGUA PARA CHOCOLATE",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": "3715163"
            }
          ]
        },
        {
          "assignment_id": "38088761",
          "title": "MA: Parte 1 del Proyecto Final - \u00a1CELEBRAR con un Potluck para el desayuno! - PUNTUALIDAD",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": "3715163"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510137",
      "course_name": "MAKE (Spring)",
      "mas": []
    },
    {
      "course_id": "3510145",
      "course_name": "Literary Thinking 3 (Spring)",
      "mas": [
        {
          "assignment_id": "38081099",
          "title": "MA: Childrens Book",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": null
            },
            {
              "due_date": "2025-05-28",
              "section_id": "3715465"
            }
          ]
        },
        {
          "assignment_id": "38081100",
          "title": "MA: Hadestown Analytical Paragraph",
          "due_dates": [
            {
              "due_date": "2025-05-08",
              "section_id": null
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715465"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715143"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715135"
            },
            {
              "due_date": "2025-05-08",
              "section_id": "3715139"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510146",
      "course_name": "Advanced Spanish: Current Events (Spring)",
      "mas": [
        {
          "assignment_id": "38090709",
          "title": "MA: Examen Final",
          "due_dates": [
            {
              "due_date": "2025-06-10",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38090710",
          "title": "MA: Presentadores y expertes/os/as",
          "due_dates": [
            {
              "due_date": "2025-04-02",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510152",
      "course_name": "United States History: The American Question (Spring)",
      "mas": [
        {
          "assignment_id": "38081951",
          "title": "HW: Second Wave Feminism (VIDEOS, ARTICLE, & PRIMARY SOURCE)",
          "due_dates": [
            {
              "due_date": "2025-03-18",
              "section_id": "3715250"
            },
            {
              "due_date": "2025-03-19",
              "section_id": "3715246"
            },
            {
              "due_date": "2025-03-18",
              "section_id": "3715248"
            },
            {
              "due_date": "2025-03-19",
              "section_id": "3715244"
            },
            {
              "due_date": "2025-03-19",
              "section_id": "3715252"
            }
          ]
        },
        {
          "assignment_id": "38081937",
          "title": "MA #5: Women's Museum Project Assignment",
          "due_dates": [
            {
              "due_date": "2025-04-01",
              "section_id": "3715250"
            },
            {
              "due_date": "2025-04-01",
              "section_id": "3715246"
            },
            {
              "due_date": "2025-04-01",
              "section_id": "3715248"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715244"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715252"
            }
          ]
        },
        {
          "assignment_id": "38081983",
          "title": "MA #6: American History Research Project (FINAL PRESENTATIONS)",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715248"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715250"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715244"
            },
            {
              "due_date": "2025-06-11",
              "section_id": "3715252"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510154",
      "course_name": "Historical Thinking 3 (Spring)",
      "mas": [
        {
          "assignment_id": "38078695",
          "title": "MA: Final Annotations",
          "due_dates": [
            {
              "due_date": "2025-05-16",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510157",
      "course_name": "Advanced Programming: Emergent Topics (Spring)",
      "mas": [
        {
          "assignment_id": "38067154",
          "title": "MA: Final Project Proposal",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": "3715171"
            },
            {
              "due_date": "2025-05-02",
              "section_id": "3715169"
            }
          ]
        },
        {
          "assignment_id": "38067153",
          "title": "MA: Final Project Demo",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715171"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715169"
            }
          ]
        },
        {
          "assignment_id": "38211626",
          "title": "MA: Milestone 1 - beginning",
          "due_dates": [
            {
              "due_date": "2025-05-10",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38211728",
          "title": "MA: Milestone 2 - middle",
          "due_dates": [
            {
              "due_date": "2025-05-24",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38211747",
          "title": "MA: Milestone 3 - end",
          "due_dates": [
            {
              "due_date": "2025-05-31",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510161",
      "course_name": "Algebra 2 (Spring)",
      "mas": []
    },
    {
      "course_id": "3510162",
      "course_name": "Mathematical Thinking 3 (Spring)",
      "mas": [
        {
          "assignment_id": "38087657",
          "title": "MA: Unit 6 Exam",
          "due_dates": [
            {
              "due_date": "2025-04-01",
              "section_id": "3715157"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715161"
            },
            {
              "due_date": "2025-04-02",
              "section_id": "3715165"
            }
          ]
        },
        {
          "assignment_id": "38087754",
          "title": "MA: Unit 7 Exam",
          "due_dates": [
            {
              "due_date": "2025-05-27",
              "section_id": "3715157"
            },
            {
              "due_date": "2025-05-28",
              "section_id": "3715161"
            },
            {
              "due_date": "2025-05-28",
              "section_id": "3715165"
            }
          ]
        },
        {
          "assignment_id": "38087708",
          "title": "MA: Unit 6 Project",
          "due_dates": [
            {
              "due_date": "2025-04-23",
              "section_id": "3715165"
            },
            {
              "due_date": "2025-04-22",
              "section_id": "3715157"
            },
            {
              "due_date": "2025-04-23",
              "section_id": "3715161"
            }
          ]
        },
        {
          "assignment_id": "38087759",
          "title": "MA: Unit 7 Project",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": "3715161"
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715165"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715157"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510163",
      "course_name": "Senior Thesis (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38082122",
          "title": "MA: Poster Symposium",
          "due_dates": [
            {
              "due_date": "2025-05-28",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38082132",
          "title": "MA: Final Deliverable",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510169",
      "course_name": "Scientific Thinking 3 (Spring)",
      "mas": [
        {
          "assignment_id": "38088686",
          "title": "MA:  P & S Wave Lab Test",
          "due_dates": [
            {
              "due_date": "2025-05-16",
              "section_id": "3715168"
            },
            {
              "due_date": "2025-05-16",
              "section_id": "3715172"
            },
            {
              "due_date": "2025-05-16",
              "section_id": "3715175"
            }
          ]
        },
        {
          "assignment_id": "38135986",
          "title": "MA:  Plate Tectonics Food Model & Key",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38135985",
          "title": "MA:  Plate Tectonics Food Final Packet",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510170",
      "course_name": "Advanced Creative Writing (Spring)",
      "mas": [
        {
          "assignment_id": "38089950",
          "title": "MA 1: Moth Performance / Texture of Concurrent Lives piece",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": "3715182"
            }
          ]
        },
        {
          "assignment_id": "38089963",
          "title": "MA 2: Exploratory Portfolio Due",
          "due_dates": [
            {
              "due_date": "2025-04-28",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38089955",
          "title": "MA 3 Due",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510171",
      "course_name": "Physics (Spring)",
      "mas": [
        {
          "assignment_id": "38067117",
          "title": "MA #3:  Research Symposium and E-poster Session",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": "3715020"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715017"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715264"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715023"
            },
            {
              "due_date": "2025-06-11",
              "section_id": "3715266"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510173",
      "course_name": "Web Design 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38059830",
          "title": "MA: Project 1 - What do you know?",
          "due_dates": [
            {
              "due_date": "2025-03-27",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38059829",
          "title": "MA: Mid-term Project\u2014Getting on the same page and Working with others",
          "due_dates": [
            {
              "due_date": "2025-05-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510180",
      "course_name": "Environmental Science (Spring)",
      "mas": [
        {
          "assignment_id": "38088627",
          "title": "MA: Final Trimester Project",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088628",
          "title": "MA: Test 6",
          "due_dates": [
            {
              "due_date": "2025-05-29",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38088629",
          "title": "MA: Test 5",
          "due_dates": [
            {
              "due_date": "2025-04-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510182",
      "course_name": "Introduction to Literary Thinking (Spring)",
      "mas": [
        {
          "assignment_id": "38097655",
          "title": "MA: Sci-Fi Worldbuilding Project",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715188"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715190"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715460"
            }
          ]
        },
        {
          "assignment_id": "38097654",
          "title": "MA: Memoir",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38098716",
          "title": "MA: Creative Story",
          "due_dates": [
            {
              "due_date": "2025-03-21",
              "section_id": null
            },
            {
              "due_date": "2025-03-21",
              "section_id": "3715188"
            },
            {
              "due_date": "2025-03-21",
              "section_id": "3715190"
            },
            {
              "due_date": "2025-03-21",
              "section_id": "3715460"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510186",
      "course_name": "Environmental Practices: Global Solutions (Spring)",
      "mas": [
        {
          "assignment_id": "38085303",
          "title": "MA: Council of All Beings",
          "due_dates": [
            {
              "due_date": "2025-03-24",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085304",
          "title": "MA: Energy Presentation",
          "due_dates": [
            {
              "due_date": "2025-05-19",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085993",
          "title": "MA: Final Podcast",
          "due_dates": [
            {
              "due_date": "2025-06-04",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085305",
          "title": "MA: Energy Presentation - 2nd Presenters",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085309",
          "title": "MA: Final Wo8B Video",
          "due_dates": [
            {
              "due_date": "2025-03-05",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38085302",
          "title": "MA: Climate Solutions TELA",
          "due_dates": [
            {
              "due_date": "2025-02-12",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510190",
      "course_name": "Introduction to Historical Thinking (Spring)",
      "mas": [
        {
          "assignment_id": "38252247",
          "title": "MA: Our Rules and Rights",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715196"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510193",
      "course_name": "Astronomy: Stars, Galaxies, & Cosmology (Spring)",
      "mas": [
        {
          "assignment_id": "38090912",
          "title": "MA #2: HR Diagram, Stellar Evolution, Galaxies",
          "due_dates": [
            {
              "due_date": "2025-05-16",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38090913",
          "title": "MA #3 (FINAL EXAM): Galaxies & Cosmology",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510194",
      "course_name": "WEB (Spring)",
      "mas": [
        {
          "assignment_id": "38089685",
          "title": "MA: Final - \"Who am I\" Website",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510196",
      "course_name": "Marine Biology (Spring)",
      "mas": [
        {
          "assignment_id": "38055536",
          "title": "MA: Test #1",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38055535",
          "title": "MA: Literature Review",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38055537",
          "title": "MA: Test #2",
          "due_dates": [
            {
              "due_date": "2025-05-21",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38055534",
          "title": "MA: Grant Proposal",
          "due_dates": [
            {
              "due_date": "2025-06-05",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510197",
      "course_name": "Introduction to Scientific Thinking (Spring)",
      "mas": [
        {
          "assignment_id": "38091117",
          "title": "MA: Animal Research Project and Presentation Due (all details are in the Science OneNote Content Library)",
          "due_dates": [
            {
              "due_date": "2025-05-13",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38091118",
          "title": "MA: Animals Book Chapter 3 Test [we will make a Study Guide in OneNote during class the week before the test]",
          "due_dates": [
            {
              "due_date": "2025-05-29",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510203",
      "course_name": "Speaking Spanish (Grade 5) (Spring)",
      "mas": []
    },
    {
      "course_id": "3510217",
      "course_name": "Mixed Media (5/6): Tools & Materials (Spring)",
      "mas": []
    },
    {
      "course_id": "3510218",
      "course_name": "Acting (5/6): Developing the Actor's Toolbox (Spring)",
      "mas": [
        {
          "assignment_id": "38086762",
          "title": "MA: News Broadcast Scenes",
          "due_dates": [
            {
              "due_date": "2025-05-07",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510219",
      "course_name": "Choir (5/6) (Spring)",
      "mas": [
        {
          "assignment_id": "38088082",
          "title": "MA: Arts Fest @ EPS!",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3510225",
      "course_name": "G period, US PE - (spring)",
      "mas": []
    },
    {
      "course_id": "3514054",
      "course_name": "American Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38086230",
          "title": "MA: Board Games Due",
          "due_dates": [
            {
              "due_date": "2025-04-25",
              "section_id": null
            },
            {
              "due_date": "2025-04-24",
              "section_id": "3715234"
            },
            {
              "due_date": "2025-04-24",
              "section_id": "3715236"
            },
            {
              "due_date": "2025-04-25",
              "section_id": "3715238"
            }
          ]
        },
        {
          "assignment_id": "38086245",
          "title": "MA: IRP Due",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3514057",
      "course_name": "American Literature (Spring)",
      "mas": [
        {
          "assignment_id": "38085027",
          "title": "MA: IRP ",
          "due_dates": [
            {
              "due_date": "2025-06-07",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38211119",
          "title": "MA: Fishbowl #1 ",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38211126",
          "title": "MA: Fishbowl #2 ",
          "due_dates": [
            {
              "due_date": "2025-05-05",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38211131",
          "title": "MA: Fishbowl #3",
          "due_dates": [
            {
              "due_date": "2025-05-09",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3514079",
      "course_name": "Adventure in the Marvelous Outdoors (Spring)",
      "mas": []
    },
    {
      "course_id": "3514081",
      "course_name": "Deliberate Design: College, Career, Life (Spring)",
      "mas": []
    },
    {
      "course_id": "3514082",
      "course_name": "Dismantling Diet Culture (Spring)",
      "mas": [
        {
          "assignment_id": "38087121",
          "title": "MA: Final Product Deep Dive",
          "due_dates": [
            {
              "due_date": "2025-05-14",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3514084",
      "course_name": "Introduction to Functional Programming (Spring)",
      "mas": []
    },
    {
      "course_id": "3514085",
      "course_name": "Patterns in the Mind: Language and Human Nature (Spring)",
      "mas": [
        {
          "assignment_id": "38229969",
          "title": "MA: Final Project",
          "due_dates": [
            {
              "due_date": "2025-05-14",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3514086",
      "course_name": "Periodic Dining Table: Topics in Food Science (Spring)",
      "mas": []
    },
    {
      "course_id": "3514087",
      "course_name": "The Magical Realism World of Gabriel Garc\u00eda M\u00e1rquez (Spring)",
      "mas": []
    },
    {
      "course_id": "3514088",
      "course_name": "Understanding Baseball Through Statistics (Spring)",
      "mas": []
    },
    {
      "course_id": "3514089",
      "course_name": "Children's Illustration Development (Spring)",
      "mas": []
    },
    {
      "course_id": "3515907",
      "course_name": "Independent Study/Project (Spring 2025)",
      "mas": [
        {
          "assignment_id": "38075221",
          "title": "MA: Midterm Deliverable",
          "due_dates": [
            {
              "due_date": "2025-04-26",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38075222",
          "title": "MA: Poster Symposium",
          "due_dates": [
            {
              "due_date": "2025-05-30",
              "section_id": null
            }
          ]
        },
        {
          "assignment_id": "38075220",
          "title": "MA: Final Deliverable",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            }
          ]
        }
      ]
    },
    {
      "course_id": "3516857",
      "course_name": "Spanish 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38087898",
          "title": "MA: Prueba1",
          "due_dates": [
            {
              "due_date": "2025-03-31",
              "section_id": null
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715066"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715067"
            },
            {
              "due_date": "2025-03-31",
              "section_id": "3715071"
            }
          ]
        },
        {
          "assignment_id": "38087899",
          "title": "MA: Prueba2",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715066"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715067"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715071"
            }
          ]
        },
        {
          "assignment_id": "38087900",
          "title": "MA: Prueba3",
          "due_dates": [
            {
              "due_date": "2025-05-20",
              "section_id": null
            },
            {
              "due_date": "2025-05-20",
              "section_id": "3715071"
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715066"
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715067"
            }
          ]
        },
        {
          "assignment_id": "38087886",
          "title": "MA: FINAL PROJECT- ORAL PRESENTATION (part 1)",
          "due_dates": [
            {
              "due_date": "2025-06-03",
              "section_id": null
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715066"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715067"
            },
            {
              "due_date": "2025-06-03",
              "section_id": "3715071"
            }
          ]
        },
        {
          "assignment_id": "38087885",
          "title": "MA: FINAL PROJECT- ORAL PRES (part 2) ",
          "due_dates": [
            {
              "due_date": "2025-06-10",
              "section_id": null
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715066"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715067"
            },
            {
              "due_date": "2025-06-10",
              "section_id": "3715071"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3516860",
      "course_name": "Spanish 2 (Spring)",
      "mas": [
        {
          "assignment_id": "38221522",
          "title": "HW: 9A. Practice for the MA: Pret\u00e9rito vs Imperfecto",
          "due_dates": [
            {
              "due_date": "2025-04-28",
              "section_id": null
            },
            {
              "due_date": "2025-04-28",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-04-28",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38088463",
          "title": "MA: Prueba1",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": null
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38125782",
          "title": "HW: Estudiar para el MA",
          "due_dates": [
            {
              "due_date": "2025-03-28",
              "section_id": null
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-03-28",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38088451",
          "title": "MA: FINAL PROJECT- ORAL PRESENTATION (part 1)",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38088450",
          "title": "MA: FINAL PROJECT- ORAL PRES (part 2) ",
          "due_dates": [
            {
              "due_date": "2025-06-06",
              "section_id": null
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38088464",
          "title": "MA: Prueba2",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": null
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715075"
            }
          ]
        },
        {
          "assignment_id": "38088465",
          "title": "MA: Prueba3",
          "due_dates": [
            {
              "due_date": "2025-05-19",
              "section_id": null
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715072"
            },
            {
              "due_date": "2025-05-19",
              "section_id": "3715075"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3516863",
      "course_name": "Spanish 4 (Spring)",
      "mas": [
        {
          "assignment_id": "38088566",
          "title": "MA: Escrito",
          "due_dates": [
            {
              "due_date": "2025-04-30",
              "section_id": null
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715091"
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715093"
            }
          ]
        },
        {
          "assignment_id": "38088567",
          "title": "MA: Oral ",
          "due_dates": [
            {
              "due_date": "2025-06-02",
              "section_id": null
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715091"
            },
            {
              "due_date": "2025-06-02",
              "section_id": "3715093"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3516866",
      "course_name": "Spanish 4 (Spring)",
      "mas": [
        {
          "assignment_id": "38221155",
          "title": "HW: 12. Pr\u00e1ctica para el MA",
          "due_dates": [
            {
              "due_date": "2025-04-29",
              "section_id": null
            },
            {
              "due_date": "2025-04-28",
              "section_id": "3715096"
            },
            {
              "due_date": "2025-04-29",
              "section_id": "3715098"
            }
          ]
        },
        {
          "assignment_id": "38088018",
          "title": "MA: 2 Escrito",
          "due_dates": [
            {
              "due_date": "2025-05-01",
              "section_id": null
            },
            {
              "due_date": "2025-04-30",
              "section_id": "3715096"
            },
            {
              "due_date": "2025-05-01",
              "section_id": "3715098"
            }
          ]
        },
        {
          "assignment_id": "38088019",
          "title": "MA: 4 Final Oral",
          "due_dates": [
            {
              "due_date": "2025-06-09",
              "section_id": null
            },
            {
              "due_date": "2025-06-06",
              "section_id": "3715096"
            },
            {
              "due_date": "2025-06-09",
              "section_id": "3715098"
            }
          ]
        }
      ]
    },
    {
      "course_id": "3516869",
      "course_name": "Physical Education (5/6) (Spring)",
      "mas": []
    },
    {
      "course_id": "3540478",
      "course_name": "American Pop Culture (Spring)",
      "mas": [
        {
          "assignment_id": "38094384",
          "title": "MA: Final Reflection",
          "due_dates": [
            {
              "due_date": "2025-05-14",
              "section_id": null
            }
          ]
        }
      ]
    }
  ]
}
    }

    calculateUserMAs() {
        this.userMAsByDate = {};

        if (!this.data) return;

        // Step 1: Find the user in the student list
        const user = this.data.students.find(student => student.user_id === this.userId);
        
        if (!user) {
            console.warn(`User ${this.userId} not found in data`);
            return;
        }

        console.log(`Found user ${this.userId} with ${user.enrollments.length} enrollments`);

        // Step 2: For each enrollment, find the course and its MAs
        user.enrollments.forEach(enrollment => {
            const courseId = enrollment.course_id;
            const sectionId = enrollment.section_id;

            // Find the course
            const course = this.data.courses.find(c => c.course_id === courseId);
            if (!course || !course.mas) return;

            // Step 3: Check all MAs in this course
            course.mas.forEach(ma => {
                ma.due_dates.forEach(dueDate => {
                    const date = dueDate.due_date;
                    const assignmentSectionId = dueDate.section_id;

                    // Check if this MA applies to this user's section
                    // (either section_id is null = applies to all, or matches user's section)
                    if (assignmentSectionId === null || assignmentSectionId === sectionId) {
                        // Add to user's MA count for this date
                        if (!this.userMAsByDate[date]) {
                            this.userMAsByDate[date] = {
                                count: 0,
                                assignments: []
                            };
                        }
                        this.userMAsByDate[date].count += 1;
                        this.userMAsByDate[date].assignments.push({
                            title: ma.title,
                            courseName: course.course_name
                        });
                    }
                });
            });
        });

        console.log('User MAs by date:', this.userMAsByDate);
        
        // Show summary of MA dates by month
        const datesByMonth = {};
        Object.keys(this.userMAsByDate).forEach(date => {
            const monthKey = date.substring(0, 7); // YYYY-MM
            if (!datesByMonth[monthKey]) {
                datesByMonth[monthKey] = [];
            }
            datesByMonth[monthKey].push(date);
        });
        
        console.log('📅 MA dates grouped by month:');
        Object.keys(datesByMonth).sort().forEach(month => {
            console.log(`   ${month}: ${datesByMonth[month].length} MAs on dates: ${datesByMonth[month].join(', ')}`);
        });
    }

    getBackgroundColor(count) {
        // Color scale based on number of MAs
        if (count === 0) return null; // No color
        if (count === 1) return '#b8e6b8'; // Light green
        if (count === 2) return '#80d480'; // Medium green
        if (count === 3) return '#4dac4d'; // Green
        if (count === 4) return '#2d862d'; // Dark green
        return '#1a5c1a'; // Very dark green (5+ MAs)
    }

    getCurrentMonth() {
        // Read the month from the navigation_title_text span
        const titleElement = document.querySelector('.navigation_title_text');
        if (!titleElement) {
            console.warn('Could not find .navigation_title_text element');
            return null;
        }

        const titleText = titleElement.textContent.trim();
        const monthName = titleText.split(' ')[0]; // Get first word (month name)
        
        return monthName;
    }

    colorCalendar() {
        console.log('=== Starting colorCalendar ===');
        console.log('User MAs to apply:', this.userMAsByDate);
        console.log('Total dates with MAs:', Object.keys(this.userMAsByDate).length);
        
        // Find all calendar day cells with class fc-day
        const dayCells = document.querySelectorAll('td.fc-day');
        
        if (dayCells.length === 0) {
            console.error('❌ No calendar cells found with class fc-day');
            console.log('Searching for alternative calendar structures...');
            
            // Try to find any calendar cells
            const anyTds = document.querySelectorAll('td');
            console.log(`Found ${anyTds.length} total <td> elements`);
            
            if (anyTds.length > 0) {
                console.log('Sample <td> classes:', Array.from(anyTds).slice(0, 5).map(td => td.className));
                console.log('Sample <td> with data-date:', Array.from(anyTds).filter(td => td.hasAttribute('data-date')).slice(0, 3));
            }
            
            return;
        }

        console.log(`✓ Found ${dayCells.length} calendar cells with fc-day class`);

        let coloredCount = 0;
        let cellsWithDates = 0;
        let cellsMatchingMADates = 0;
        const sampleDates = [];

        dayCells.forEach((cell, index) => {
            // Get the date from data-date attribute
            const dateStr = cell.getAttribute('data-date');
            
            if (!dateStr) {
                if (index < 5) console.log(`Cell ${index}: No data-date attribute`);
                return;
            }
            
            cellsWithDates++;
            if (sampleDates.length < 5) {
                sampleDates.push(dateStr);
            }

            // Check if user has MAs on this date
            if (this.userMAsByDate[dateStr]) {
                cellsMatchingMADates++;
                const count = this.userMAsByDate[dateStr].count;
                const backgroundColor = this.getBackgroundColor(count);
                
                console.log(`Match found! Date: ${dateStr}, Count: ${count}, Color: ${backgroundColor}`);
                
                if (backgroundColor) {
                    // Apply background color with !important
                    cell.style.setProperty('background-color', backgroundColor, 'important');
                    coloredCount++;

                    // Optional: Add a tooltip or data attribute for debugging
                    cell.setAttribute('data-ma-count', count);
                    cell.setAttribute('title', 
                        `${count} MA${count > 1 ? 's' : ''} due:\n` + 
                        this.userMAsByDate[dateStr].assignments.map(a => `- ${a.title} (${a.courseName})`).join('\n')
                    );
                    
                    console.log(`✓ Colored cell for ${dateStr} with ${count} MAs`);
                }
            }
        });

        console.log('=== Calendar Coloring Summary ===');
        console.log(`Total cells found: ${dayCells.length}`);
        console.log(`Cells with data-date: ${cellsWithDates}`);
        console.log(`Sample dates found in calendar:`, sampleDates);
        console.log(`Cells matching MA dates: ${cellsMatchingMADates}`);
        console.log(`Cells actually colored: ${coloredCount}`);
        console.log(`MA dates to match:`, Object.keys(this.userMAsByDate));
        
        if (coloredCount === 0 && Object.keys(this.userMAsByDate).length > 0) {
            console.warn('⚠️ Warning: User has MAs but no calendar cells were colored!');
            console.warn('This likely means the dates in the calendar don\'t match the MA dates.');
            console.warn('📅 Calendar has dates like:', sampleDates.join(', '));
            console.warn('📚 User has MAs on dates like:', Object.keys(this.userMAsByDate).slice(0, 10).join(', '));
            console.warn('');
            console.warn('💡 SOLUTION: Make sure your calendar is showing the correct month/year where the MAs are scheduled.');
            console.warn('   The calendar and MA dates need to overlap for coloring to work.');
        }
    }

    // Method to re-color calendar (useful if calendar is re-rendered)
    refresh() {
        this.colorCalendar();
    }
}

// Global function to initialize the colorizer
async function initUserCalendarColorizer(userId) {
    const colorizer = new UserCalendarColorizer(userId);
    await colorizer.init();
    
    // Store instance globally for potential refresh calls
    window.userCalendarColorizer = colorizer;
    
    return colorizer;
}

// Auto-initialize if user_id is provided in URL params
const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('user_id');

if (userId) {
    console.log('Auto-initializing calendar colorizer for user:', userId);

    setInterval(() => initUserCalendarColorizer(userId), 100);
}