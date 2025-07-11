"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const nodes = [
  { id: "ai", label: "AI Analytics", x: 250, y: 50, tooltip: "AI-driven insights" },
  { id: "channels", label: "Channels", x: 450, y: 150, tooltip: "Omni-channel reach" },
  { id: "curation", label: "Content Curation", x: 400, y: 300, tooltip: "Viral content machine" },
  { id: "team", label: "Top-Tier Team", x: 100, y: 300, tooltip: "Meme-lords & data nerds" },
  { id: "tracking", label: "Real-Time Tracking", x: 50, y: 150, tooltip: "Live campaign dashboards" },
];

const edges = [
  { from: "ai", to: "channels" },
  { from: "channels", to: "curation" },
  { from: "curation", to: "team" },
  { from: "team", to: "tracking" },
  { from: "tracking", to: "ai" },
  { from: "ai", to: "team" },
  { from: "channels", to: "tracking" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const lineVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.4 } },
};

const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { stiffness: 100 } },
};

const FeatureMap = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const findNode = (id: string) => nodes.find((n) => n.id === id)!;

  return (
    <motion.svg
      viewBox="0 0 500 400"
      className="w-full h-full"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <circle cx="250" cy="200" r="30" fill="rgba(139, 92, 246, 0.2)" />

      {edges.map((edge, i) => {
        const fromNode = findNode(edge.from);
        const toNode = findNode(edge.to);
        return (
          <motion.line
            key={`edge-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
            variants={lineVariants}
          />
        );
      })}

      {nodes.map((node) => (
        <motion.g
          key={node.id}
          transform={`translate(${node.x}, ${node.y})`}
          variants={nodeVariants}
          onHoverStart={() => setHoveredNode(node.id)}
          onHoverEnd={() => setHoveredNode(null)}
        >
          <motion.circle
            r="15"
            fill="rgba(34, 197, 94, 0.5)"
            whileHover={{ scale: 1.5, fill: "#22C55E" }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <text
            textAnchor="middle"
            y="35"
            fill="white"
            fontSize="12"
            className="font-semibold pointer-events-none"
          >
            {node.label}
          </text>
          {hoveredNode === node.id && (
            <text
              textAnchor="middle"
              y="-25"
              fill="#22C55E"
              fontSize="10"
              className="font-bold"
            >
              {node.tooltip}
            </text>
          )}
        </motion.g>
      ))}
    </motion.svg>
  );
};

export default FeatureMap; 