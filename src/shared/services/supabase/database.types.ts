export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      edges: {
        Row: {
          edge_id: string;
          id: number;
          source_node_id: string;
          target_node_id: string;
        };
        Insert: {
          edge_id: string;
          id: number;
          source_node_id: string;
          target_node_id: string;
        };
        Update: {
          edge_id?: string;
          id?: number;
          source_node_id?: string;
          target_node_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "edges_source_node_id_fkey";
            columns: ["source_node_id"];
            isOneToOne: false;
            referencedRelation: "nodes";
            referencedColumns: ["node_id"];
          },
          {
            foreignKeyName: "edges_target_node_id_fkey";
            columns: ["target_node_id"];
            isOneToOne: false;
            referencedRelation: "nodes";
            referencedColumns: ["node_id"];
          },
        ];
      };
      nodes: {
        Row: {
          id: number;
          node_id: string;
          title: string;
          type_id: number;
        };
        Insert: {
          id: number;
          node_id: string;
          title: string;
          type_id: number;
        };
        Update: {
          id?: number;
          node_id?: string;
          title?: string;
          type_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "nodes_type_id_fkey";
            columns: ["type_id"];
            isOneToOne: false;
            referencedRelation: "nodetypes";
            referencedColumns: ["id"];
          },
        ];
      };
      nodetypes: {
        Row: {
          created_at: string;
          id: number;
          name: string;
        };
        Insert: {
          created_at?: string;
          id?: number;
          name: string;
        };
        Update: {
          created_at?: string;
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
      nodeuserdata: {
        Row: {
          completed: boolean;
          id: number;
          node_id: string;
          user_id: string;
        };
        Insert: {
          completed?: boolean;
          id: number;
          node_id: string;
          user_id: string;
        };
        Update: {
          completed?: boolean;
          id?: number;
          node_id?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "nodeuserdata_node_id_fkey";
            columns: ["node_id"];
            isOneToOne: false;
            referencedRelation: "nodes";
            referencedColumns: ["node_id"];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type PublicSchema = Database[Extract<keyof Database, "public">];

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;
