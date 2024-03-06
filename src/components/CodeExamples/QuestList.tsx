import { useState } from "react";
type NPC = { id: number; name: string; location: string };
type Quest = {
  id: number;
  complete: boolean;
  description: string;
  reward: string | number;
  XP: number;
  questGiver?: NPC;
};

const QuestList = () => {
  const startQuests: Quest[] = [
    {
      id: 1,
      complete: false,
      description: "Do something",
      reward: "Tungsten Axe",
      XP: 980,
    },
    {
      id: 2,
      complete: true,
      description: "Do something else",
      reward: "Gold",
      XP: 780,
      questGiver: { id: 1, name: "sadasd", location: "Norrby" },
    },
    {
      id: 3,
      complete: false,
      description: "Do something else again",
      reward: "Firesteel Armor",
      XP: 1500,
      questGiver: { id: 1, name: "asdsa	", location: "Norrby" },
    },
    {
      id: 4,
      complete: true,
      description: "Do nothing",
      reward: "Dirt",
      XP: 1,
      questGiver: { id: 1, name: "George", location: "Norrby" },
    },
  ];

  const [quests, setQuests] = useState(startQuests);

  //   const handleQuests = () => {
  //     setQuests(
  //       quests.map((quest) => {
  //         if (quest.id === 1) {
  //           return { ...quest, complete: !quest.complete };
  //         }
  //         return quest;
  //       })
  //     );
  //   };

  return (
    <>
      <h1>QuestList</h1>
      <div className="questBox">
        <button>Get Quests</button>
        {quests.map((quest: Quest) => {
          return (
            <ul>
              <li>{`Description: ${quest.description}`}</li>
              <li>{`Reward: ${quest.reward}`}</li>
              <li>{`XP: ${quest.XP}`}</li>
              <li>{`Quest giver: ${quest.questGiver?.name}`}</li>
              <li>
                {quest.complete ? (
                  <span
                    onClick={() => {
                      setQuests(
                        quests.map((q) => {
                          if (q.id === quest.id) {
                            return { ...quest, complete: false };
                          } else return q;
                        })
                      );
                    }}
                  >
                    ✅
                  </span>
                ) : (
                  <span
                    onClick={() => {
                      setQuests(
                        quests.map((q) => {
                          if (q.id === quest.id) {
                            return { ...quest, complete: true };
                          } else return q;
                        })
                      );
                    }}
                  >
                    🟩
                  </span>
                )}
              </li>
            </ul>
          );
        })}
      </div>
    </>
  );
};

export default QuestList;
